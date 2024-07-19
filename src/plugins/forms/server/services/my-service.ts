import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  getContentTypes() {
    const keys = Object.keys(strapi.contentTypes)?.filter((key) =>
      key.includes("plugin::forms")
    );
    return keys.map((key) => {
      return strapi.contentTypes[key];
    });
  },
});
