import { defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "details",
      title: "Full Details",
      type: "text",
    },
    {
      name: "date",
      title: "Published Date",
      type: "datetime",
    },
    {
      name: "src",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
