export default {
  routes: [
    {
      method: 'GET',
      path: '/trigger-build',
      handler: 'trigger-build.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/trigger-build/true',
      handler: 'trigger-build.triggerBuildTrue',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/trigger-build/false',
      handler: 'trigger-build.triggerBuildFalse',
      config: {
        policies: []
      }
    }
  ],
};
