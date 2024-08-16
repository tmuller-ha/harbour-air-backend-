export default {
    type: 'content-api',
    routes: [
        {
            method: 'GET',
            path: '/parcel-express-quotes',
            handler: 'parcelExpressQuote.findAll',
            config: {
                policies: [],
                auth: false,
            }
        },
        {
            method: 'GET',
            path: '/parcel-express-quotes/:id',
            handler: 'parcelExpressQuote.findOne',
            config: {
                policies: [],
                auth: false,
            }
        },
        {
            method: 'POST',
            path: '/parcel-express-quotes',
            handler: 'parcelExpressQuote.create',
            config: {
                policies: [],
                auth: false,
            }
        },
        {
            method: 'PUT',
            path: '/parcel-express-quotes/:id',
            handler: 'parcelExpressQuote.update',
            config: {
                policies: [],
                auth: false,
            }
        },
        {
            method: 'DELETE',
            path: '/parcel-express-quotes/:id',
            handler: 'parcelExpressQuote.remove',
            config: {
                policies: [],
                auth: false,
            }
        },
    ]
}