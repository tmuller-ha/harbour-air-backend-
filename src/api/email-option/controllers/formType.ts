export enum Form {
    contactDetailsForm = "contactDetails",
    baggageDetailsForm = "baggageDetails",
    carServiceDetailsForm = "carServiceDetails",
    charteredFlightDetailsForm = "charteredFlightDetails",
    inquiriesDetailsForm = "inquiriesDetails",
    onAccountTicketDetailsForm = "onAccountTicketDetails",
    parcelExpressQuoteDetailsForm = "parcelExpressQuoteDetails",
    discountedQuoteDetailsForm = "discountedQuoteDetails",
    groupDetailsForm = "groupBookingDetails",
    turbobucksOrderDetailsForm = "turbobucksOrderDetails",
    loyaltyDetailsForm = "loyaltyDetails",
  }
  
  export type EmailFormType = {
    contactDetailsForm?: ToEmails;
    baggageDetailsForm?: ToEmails;
    carServiceDetailsForm?: ToEmails;
    charteredFlightDetailsForm?: ToEmails;
    inquiriesDetailsForm?: ToEmails;
    onAccountTicketDetailsForm?: ToEmails;
    parcelExpressQuoteDetailsForm?: ToEmails;
    discountedQuoteDetailsForm?: ToEmails;
    groupDetailsForm?: ToEmails;
    turbobucksOrderDetailsForm?: ToEmails;
    loyaltyDetailsForm?: ToEmails;
  };
  
  type ToEmails = {
    id:string
    toEmails: {
      email:string;
    }[];
  };