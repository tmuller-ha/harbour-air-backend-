/**
 * A set of functions called "actions" for `trigger-build`
 */
'use strict'

export default {
  find: async () => {
    try {
      const item = await strapi.service("api::trigger-build.trigger-build").find();
      return item;
    } catch (err) {
      throw new Error(err);
    }
  },

  triggerBuildTrue: async () => {
    try {
      const item = await strapi.service("api::trigger-build.trigger-build").triggerBuildTrue();
      return item;
    } catch (err) {
      throw new Error(err);
    }
  },

  triggerBuildFalse: async () => {
    try {
      const item = await strapi.service("api::trigger-build.trigger-build").triggerBuildFalse();
      return item
    } catch (err) {
      throw new Error(err);
    }
  }
};
