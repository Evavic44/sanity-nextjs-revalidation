import { groq } from "next-sanity";

// Query schema datasets
export const postQuery = groq`*[_type == "post"] {
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
}`;

export const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  content,
  cover {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
}`;
