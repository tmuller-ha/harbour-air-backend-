export default {
  type: "content-api",
    routes: [
        {
            method: 'GET',
            path: '/tour-requests',
            handler: 'tourRequest.findAll',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'GET',
            path: '/tour-requests/:id',
            handler: 'tourRequest.findOne',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/tour-requests/:id',
            handler: 'tourRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/tour-requests/:id',
            handler: 'tourRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/tour-requests',
            handler: 'tourRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}