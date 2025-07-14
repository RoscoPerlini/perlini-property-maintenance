import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./sanity/sanity.api";

export default defineCliConfig({
  api: { projectId: "3irp9ubv", dataset: "production" },
});
