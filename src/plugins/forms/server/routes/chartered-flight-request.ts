export default {
    routes: [
        {
            method: "GET",
            path: "/chartered-flight-request",
            handler: "charteredFlightRequest.findAll",
            config: {
                policies: [],
                auth: false,
            }
        },{
            method: 'GET',
            path: '/chartered-flight-request/:id',
            handler: 'charteredFlightRequest.findOne',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/chartered-flight-request/delete/:id',
            handler: 'charteredFlightRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/chartered-flight-request/update/:id',
            handler: 'charteredFlightRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/chartered-flight-request/create',
            handler: 'charteredFlightRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}