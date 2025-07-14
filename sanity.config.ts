import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Site",

  projectId: "3irp9ubv",
  dataset: "production",
  basePath: "/studio",
  CORS: ["https://roscoandperlini.co.uk"],
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: "http://localhost:3000",
        // origin: "https://roscoandperlini.co.uk",
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
