import { createClient, type ClientConfig } from "@sanity/client";
import { projectId, dataset, apiVersion, token } from "./sanity.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
};
const client = createClient(config);

export default client;
