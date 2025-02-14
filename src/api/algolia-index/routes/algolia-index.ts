export default {
  routes: [
    {
     method: 'POST',
     path: '/algolia-index',
     handler: 'algolia-index.trigger',
    },
  ],
};
