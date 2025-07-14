// // sanity/sanity.client.ts

// import { createClient, type ClientConfig } from "@sanity/client";

// const config: ClientConfig = {
//   projectId: "vjrrsvsn",
//   dataset: "production",
//   apiVersion: "2023-07-16",
//   useCdn: false,
// };

// const client = createClient(config);

// export default client;

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "./env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // These settings are overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
