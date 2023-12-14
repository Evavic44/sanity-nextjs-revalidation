import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/schema";
import { projectId, dataset } from "./lib/sanity.api";

export default defineConfig({
  name: "default",
  title: "sanity-nextjs-revalidation",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
