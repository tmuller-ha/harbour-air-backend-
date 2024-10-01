/**
 * email-form controller
 */

import { factories } from "@strapi/strapi";
import {
  baggageClaimFormRequestTemplate,
  carServiceFormRequestTemplate,
  charteredFlightRequestTemplate,
  contactFormTemplate,
  discountedTravelRequestTemplate,
  groupBookingsFormRequestTemplate,
  highFlyerRewardsApplicationTemplate,
  inquiriesFormRequestTemplate,
  onAccountTicketTemplate,
  parcelExpressQuoteTemplate,
  turbobucksOrderTemplate,
} from "./email-templates/index";
import { pick } from "lodash";
import { EmailFormType, Form } from "./formType";

export default factories.createCoreController(
  "api::email-form.email-form",
  () => ({
    async trigger(ctx) {
      try {
        const body = ctx.request.body as any;
        const { formType } = body;

        const emailForm = await strapi
          .documents("api::email-form.email-form")
          .findFirst({
            status: "published",
            populate: [
              "contactDetailsForm.toEmails",
              "loyaltyDetailsForm.toEmails",
            ],
          });

        switch (formType) {
          case Form.contactDetailsForm:
            const { contactDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of contactDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email \
                      TODO: update to email to the userDetails.email later
                    */
                },
                contactFormTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.baggageDetailsForm:
            const { baggageDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of baggageDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 

                      TODO: update to email to the userDetails.email later
                    */
                },
                baggageClaimFormRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.carServiceDetailsForm:
            const { carServiceDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of carServiceDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                carServiceFormRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.charteredFlightDetailsForm:
            const { charteredFlightDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of charteredFlightDetailsForm?.toEmails ||
              []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                charteredFlightRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.inquiriesDetailsForm:
            const { inquiriesDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of inquiriesDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                inquiriesFormRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.onAccountTicketDetailsForm:
            const { onAccountTicketDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of onAccountTicketDetailsForm?.toEmails ||
              []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                onAccountTicketTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.parcelExpressQuoteDetailsForm:
            const { parcelExpressQuoteDetailsForm } =
              emailForm as EmailFormType;
            for (const userDetail of parcelExpressQuoteDetailsForm?.toEmails ||
              []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                parcelExpressQuoteTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.discountedQuoteDetailsForm:
            const { discountedQuoteDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of discountedQuoteDetailsForm?.toEmails ||
              []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                discountedTravelRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.groupDetailsForm:
            const { groupDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of groupDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                groupBookingsFormRequestTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.turbobucksOrderDetailsForm:
            const { turbobucksOrderDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of turbobucksOrderDetailsForm?.toEmails ||
              []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                turbobucksOrderTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
          case Form.loyaltyDetailsForm:
            const { loyaltyDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of loyaltyDetailsForm?.toEmails || []) {
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                      TODO: update to email to the userDetails.email later
                    */
                },
                highFlyerRewardsApplicationTemplate,
                {
                  user: pick(body, ["email"]),
                }
              );
            }
        }
        return emailForm;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
