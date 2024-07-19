export default {
    routes: [
        {
            method: "GET",
            path: "/chartered-flight-requests",
            handler: "charteredFlightRequest.findAll",
            config: {
                policies: [],
                auth: false,
            }
        },{
            method: 'GET',
            path: '/chartered-flight-requests/:id',
            handler: 'charteredFlightRequest.findOne',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/chartered-flight-requests/delete/:id',
            handler: 'charteredFlightRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/chartered-flight-requests/update/:id',
            handler: 'charteredFlightRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/chartered-flight-requests/create',
            handler: 'charteredFlightRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}