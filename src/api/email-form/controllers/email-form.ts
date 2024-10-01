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
import { EmailFormType, Form } from "./formType";

export default factories.createCoreController(
  "api::email-form.email-form",
  () => ({
    async trigger(ctx) {
      try {
        const body = ctx.request.body as any;
        const { formType } = body;

        const emailForm =await strapi
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
            for (const userDetail of contactDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                contactFormTemplate,
                {
                  user: userDetail,
                }
              )
            }           
          case Form.baggageDetailsForm:
            const { baggageDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of baggageDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                baggageClaimFormRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.carServiceDetailsForm:
            const { carServiceDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of carServiceDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                carServiceFormRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.charteredFlightDetailsForm:
            const { charteredFlightDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of charteredFlightDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                charteredFlightRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.inquiriesDetailsForm:
            const { inquiriesDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of inquiriesDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                inquiriesFormRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.onAccountTicketDetailsForm:
            const { onAccountTicketDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of onAccountTicketDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                onAccountTicketTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.parcelExpressQuoteDetailsForm:
            const { parcelExpressQuoteDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of parcelExpressQuoteDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                parcelExpressQuoteTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.discountedQuoteDetailsForm:
            const { discountedQuoteDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of discountedQuoteDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                discountedTravelRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.groupDetailsForm:
            const { groupDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of groupDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                groupBookingsFormRequestTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.turbobucksOrderDetailsForm:
            const { turbobucksOrderDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of turbobucksOrderDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                turbobucksOrderTemplate,
                {
                  user: userDetail,
                }
              )
            }
          case Form.loyaltyDetailsForm:
            const { loyaltyDetailsForm } = emailForm as EmailFormType;
            for (const userDetail of loyaltyDetailsForm?.toEmails || []){
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: process.env.DEFAULT_REPLY_TO_EMAIL,
                  /** Currently we don't have production access for ses 
                      so setting default to email for emails
                      once production access is added we need to update with body.email 
                    */
                },
                highFlyerRewardsApplicationTemplate,
                {
                  user: userDetail,
                }
              )
            }
        }
        return emailForm;
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  })
);
