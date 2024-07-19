export default {
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
            path: '/tour-requests/delete/:id',
            handler: 'tourRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/tour-requests/update/:id',
            handler: 'tourRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/tour-requests/create',
            handler: 'tourRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}