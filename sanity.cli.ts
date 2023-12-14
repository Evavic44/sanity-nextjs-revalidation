import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./lib/sanity.api";

export default defineCliConfig({
  api: { projectId, dataset },
});
