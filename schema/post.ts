import { defineType } from "sanity";
import { BiBookOpen } from "react-icons/bi";

export default defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  icon: BiBookOpen,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { metadata: ["lqip"] },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      rows: 5,
    },
  ],
});
