import { factories } from "@strapi/strapi";
import { pick } from "lodash";

export type RecaptchaVerifyResponse = {
  success: boolean; // Whether the verification was successful
  challenge_ts?: string; // Timestamp of the challenge
  hostname?: string; // Hostname of the site where reCAPTCHA was solved
  "error-codes"?: string[]; // List of error codes if verification fails
  score?: number; // (For reCAPTCHA v3) Score between 0.0 and 1.0
  action?: string; // (For reCAPTCHA v3) The action name for which token was issued
};

const formatKey = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

const getDataKeys = (data: any) => {
  const keyValues = Object.keys(data).map((key) => {
    if (typeof data[key] === "string" || typeof data[key] === "number") {
      return `<strong>${formatKey(key)}</strong> : ${data[key]}`;
    }
    return "";
  });
  return keyValues.filter(Boolean).join("<br>");
};

const getTemplate = (data: any): string => {
  return `${getDataKeys(data)}`;
};

export default factories.createCoreController(
  "api::email-option.email-option",
  () => ({
    async trigger(ctx) {
      console.log("request", ctx.request.body);
      try {
        const body = ctx.request.body as any;
        const formType = pick(body, ["formType"]);
        const emailForm = await strapi
          .documents("api::email-option.email-option")
          .findFirst({
            status: "published",
            filters: { type: { $eq: formType.formType } },
            populate: ["toEmails"],
          });
        for (const { email } of emailForm?.toEmails || []) {
          console.log("getTemplate", getTemplate);
          /* Staff Response */
          await strapi.plugins["email"].services.email.sendTemplatedEmail(
            {
              to: email,
            },
            {
              subject: `Website ${formType.formType} Form: from ${body.data.email}`,
              text: "",
              html: `
              <strong>MESSAGE FORWARD TO: ${
                process.env.DEFAULT_FROM_EMAIL
              }</strong><br>
              <strong>Message Details:</strong><br>
              ${getTemplate(body?.data)}
              <p>This e-mail was sent from a contact form on the Harbour Air Website (harbourair.com)</p>`,
            }
          );
        }
        /* Client Response */
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: body.data.email,
          },
          {
            subject: `Harbour Air - Auto Respond to Your Inquiry`,
            text: "",
            html: `
            <p>Thank you for contacting Harbour Air!</p><b>We have received your message.</b>
            <p>For queries that request a response, our current reply times are within 1 to 5 business days. If your inquiry is of urgent nature, please connect with our Contact Centre toll-free at 1.800.665.0212 or via email at <a href="mailto:reservation@harbourair.com">reservation@harbourair.com</a>.</p>
            <p>Please note, since our teams have been experiencing a higher-than-anticipated call and email volume, we appreciate your patience as we do our best to assist all guests in a timely manner.</p>
            <p>Have a very nice day!</p>
          `,
          }
        );
        return emailForm;
      } catch (error) {
        console.error("Error in email-option controller", error);
        ctx.throw(500, error);
      }
    },

    async verifyCaptcha(ctx) {
      try {
        const { token } = ctx.request.body;
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!token) {
          return ctx.badRequest("Missing reCAPTCHA token");
        }
        const response = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${token}`,
          }
        );

        const data: RecaptchaVerifyResponse =
          (await response.json()) as RecaptchaVerifyResponse;

        console.log("reCAPTCHA Response", data);
        if (data.success) {
          return ctx.send({ success: true });
        } else {
          return ctx.badRequest({ success: false });
        }
      } catch (error) {
        console.error("reCAPTCHA Error:", error);
        return ctx.internalServerError(
          "An error occurred while verifying reCAPTCHA"
        );
      }
    },
  })
);
