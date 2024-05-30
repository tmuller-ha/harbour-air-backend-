/**
 * trigger-build service
 */

export default () => ({

    async find() {
        // Access the Strapi ORM to fetch data
        const items = await strapi.query('api::trigger-build.trigger-build').findOne({ where: { id: 1 } });

        return items;
    },

    async triggerBuildFalse() {
        // Create an entry in the database
        const item = await strapi.query('api::trigger-build.trigger-build').update({ where: { id: 1 }, data: { isTriggerBuild: false } });

        return item;
    },

    async triggerBuildTrue() {
        const item = await strapi.query('api::trigger-build.trigger-build').update({ where: { id: 1 }, data: { isTriggerBuild: true } });
        return item;
    }
});
