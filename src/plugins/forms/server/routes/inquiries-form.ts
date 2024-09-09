export default {
    type: "content-api",
      routes: [
          {
              method: "GET",
              path: "/inquiries-forms",
              handler: "inquiriesForm.findAll",
              config: {
                  policies: [],
                  auth: false,
              }
          },{
              method: 'GET',
              path: '/inquiries-forms/:id',
              handler: 'inquiriesForm.findOne',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'DELETE',
              path: '/inquiries-forms/:id',
              handler: 'inquiriesForm.remove',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'PUT',
              path: '/inquiries-forms/:id',
              handler: 'inquiriesForm.update',
              config: {
                policies: [],
                auth: false,
              },
          },
          {
              method: 'POST',
              path: '/inquiries-forms',
              handler: 'inquiriesForm.create',
              config: {
                policies: [],
                auth: false,
              },
          }
      ]
  }