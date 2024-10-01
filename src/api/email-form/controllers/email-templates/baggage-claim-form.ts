const baggageClaimFormRequestTemplate = {
    subject: "New Baggage Claim Request",
    text: "",
    html: `<h1>New Baggage Claim Request From <%= user.email %> </h1>`,
  };
  
  export default baggageClaimFormRequestTemplate;
  