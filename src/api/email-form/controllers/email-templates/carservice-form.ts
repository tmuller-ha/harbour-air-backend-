const carServiceFormRequestTemplate = {
  subject: "New Car Service Request",
  text: "",
  html: `<h1>New Car Service Request From <%= user.email %> </h1>`,
};

export default carServiceFormRequestTemplate;
