export default {
    type: "content-api",
      routes: [
          {
              method: "GET",
              path: "/contact-forms",
              handler: "contactForm.findAll",
              config: {
                  policies: [],
                  auth: false,
              }
          },{
              method: 'GET',
              path: '/contact-forms/:id',
              handler: 'contactForm.findOne',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'DELETE',
              path: '/contact-forms/:id',
              handler: 'contactForm.remove',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'PUT',
              path: '/contact-forms/:id',
              handler: 'contactForm.update',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'POST',
              path: '/contact-forms',
              handler: 'contactForm.create',
              config: {
                policies: [],
                auth: false,
              },
          }
      ]
  }