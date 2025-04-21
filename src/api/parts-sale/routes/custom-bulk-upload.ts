module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/parts-sales/bulk-upload',
            handler: 'parts-sale.bulkUpload',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
