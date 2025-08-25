import { defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "src",
      title: "Thumbnail / Screenshot",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imageUrl",   // 🔥 add this
      title: "Image URL (Supabase)",
      type: "url",
    },
    {
      name: "createdAt",  // 🔥 add this
      title: "Created At",
      type: "datetime",
    },
  ],
});
