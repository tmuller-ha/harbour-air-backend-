/**
 * aero-deploy service
 */

const aerospaceCollections = [
  "aerospace-base-page",
  "aerospace-capabilite",
  "aerospace-career",
  "aerospace-footer",
  "aerospace-header",
  "aerospace-homes",
  "aerospace-meet-the-team",
  "aerospace-part-sale",
  "aerospace-sales-item",
  "aerospace-stckit",
  "aerospace-testimonial",
  "aerospace-who-we",
  "email-option",
];

export default () => ({
  async triggerBuild(data) {
    try {
      console.log("Triggering aerospace build with data:", data);

      console.log("data.model:", data.model);

      const isNotAerospaceModel =
        !data.model || !aerospaceCollections.includes(data.model);

      console.log("isNotAerospaceModel:", isNotAerospaceModel);
      if (isNotAerospaceModel) {
        console.log(
          `Model "${data.model}" is not in aerospace collections. Skipping build trigger.`
        );
        return {
          skipped: true,
          reason: `Model "${data.model}" is not an aerospace collection`,
        };
      }

      const apiEndpoint = process.env.AEROSPACE_BUILD_TRIGGER_URL;

      if (!apiEndpoint) {
        throw new Error(
          "AEROSPACE_BUILD_TRIGGER_URL environment variable is not set"
        );
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(
          `AWS API call failed with status: ${response.status} - ${response.statusText}`
        );
      }

      const awsResponse = await response.json();

      console.log("AWS API call successful:", awsResponse);
      return awsResponse;
    } catch (error) {
      console.error("Build trigger failed:", error);
      throw new Error(`Build failed: ${error.message}`);
    }
  },
});
