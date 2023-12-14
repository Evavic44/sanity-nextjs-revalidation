import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      cover {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      content,
    }`
  );
}

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      content,
    }`,
    { slug }
  );
}
