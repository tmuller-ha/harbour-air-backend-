export default {
    routes: [
        {
            method: 'GET',
            path: '/tours',
            handler: 'tourRequest.findAll',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'GET',
            path: '/tours/:id',
            handler: 'tourRequest.findOne',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/tours/delete/:id',
            handler: 'tourRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/tours/update/:id',
            handler: 'tourRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/tours/create',
            handler: 'tourRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}