export default {
  type: "content-api",
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
            path: '/chartered-flight-requests/:id',
            handler: 'charteredFlightRequest.remove',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/chartered-flight-requests/:id',
            handler: 'charteredFlightRequest.update',
            config: {
              policies: [],
              auth: false,
            },
        },
        {
            method: 'POST',
            path: '/chartered-flight-requests',
            handler: 'charteredFlightRequest.create',
            config: {
              policies: [],
              auth: false,
            },
        }
    ]
}