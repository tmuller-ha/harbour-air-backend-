const tourRequestTemplate = {
  subject: "New Tour Request",
  text: "",
  html: `<h1>New Tour Request From <%= user.email %> </h1>`,
};

export default tourRequestTemplate;
