/**
 * A set of functions called "actions" for `algolia-index`
 */

import { getPageContent } from "../utils/utils";

export default {
  trigger: async (ctx) => {
    try {
      const { model, entry } = ctx.request.body;
      const pageContent = getPageContent(model, entry);
      if (pageContent) {
        const { documentId } = pageContent;
        const response = await fetch(
          `https://${process.env.ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/single_type_pages/${documentId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Algolia-API-Key": process.env.ALGOLIA_ADMIN_KEY,
              "X-Algolia-Application-Id": process.env.ALGOLIA_APP_ID,
            },
            body: JSON.stringify(pageContent),
          }
        );
        return response;
      }
      return {};
    } catch (err) {
      console.error(err);
    }
  },
};
