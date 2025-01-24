import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'ai-text-field',
    plugin: 'ai-text-field',
    type: 'string',

    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};

export default register;
