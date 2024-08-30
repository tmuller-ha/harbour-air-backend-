const contactFormTemplate = {
  subject: "New Contact Request",
  text: "",
  html: `<h1>New Contact Request From <%= user.email %> </h1>`,
};

export default contactFormTemplate;
