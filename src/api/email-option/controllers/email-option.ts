import { factories } from "@strapi/strapi";
import { pick } from "lodash";

const getDataKeys = (data: any) => {
  const keyValues = Object.keys(data).map((key) => {
    if (typeof data[key] === "string" || typeof data[key] === "number") {
      return `${key} : ${data[key]}`;
    }
    return "";
  });
  return keyValues.filter(Boolean).join("\n");
};

const getTemplate = (data: any): string => {
  return `${getDataKeys(data)}`;
};

export default factories.createCoreController(
  "api::email-option.email-option",
  () => ({
    async trigger(ctx) {
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
          await strapi.plugins["email"].services.email.sendTemplatedEmail(
            {
              to: email,
              /** Currently we don't have production access for ses 
                so setting default to email for emails
                once production access is added we need to update with body.email 
                TODO: update to email to the userDetails.email later
              */
            },
            {
              subject: `${formType.formType} Request`,
              text: getTemplate(body?.data),
              html: "",
            }
          );
        }

        return emailForm;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
