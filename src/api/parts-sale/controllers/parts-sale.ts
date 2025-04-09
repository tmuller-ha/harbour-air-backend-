/**
 * parts-sale controller
 */

import { factories } from '@strapi/strapi'




export default factories.createCoreController('api::parts-sale.parts-sale', ({ strapi }) => ({
    async bulkUpload(ctx) {
        const { data } = ctx.request.body;

        if (!Array.isArray(data) || data.length === 0) {
            return ctx.badRequest('No data received');
        }

        try {
            const entries = await Promise.all(
                data.map((item) =>
                    strapi.entityService.create('api::parts-sale.parts-sale', { data: item })
                )
            );

            ctx.send({ message: 'Bulk upload successful', count: entries.length });
        } catch (err) {
            console.error('Bulk upload error:', err);
            ctx.internalServerError('Failed to upload data');
        }
    },
}));

