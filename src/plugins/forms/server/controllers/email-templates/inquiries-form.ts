const inquiriesFormRequestTemplate = {
    subject: "New Inquiries Request",
    text: "",
    html: `<h1>New Inquiries Request From <%= user.email %> </h1>`,
  };
  
  export default inquiriesFormRequestTemplate;