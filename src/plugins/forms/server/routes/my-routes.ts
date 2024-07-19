export default {
    routes: [
        {
            method: 'GET',
            path: '/',
            handler: 'myController.getContentTypes',
            config: {
                policies: [],
                auth: false,
            }
        }
    ]
}