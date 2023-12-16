import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import {
  projectId,
  dataset,
  apiVersion,
  token,
  hookSecret,
} from "@/lib/sanity.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: hookSecret ? false : true, // set CDN to live API when webhook secret is undefined
  token,
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // disable cache when hook secret is undefined for development only.
    cache: hookSecret ? "force-cache" : "no-cache",
    next: { tags },
  });
}
