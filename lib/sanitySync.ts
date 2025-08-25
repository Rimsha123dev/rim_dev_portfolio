// lib/sanitySync.ts
export const syncBlogToSanity = async (blog: any) => {
  const res = await fetch("/api/sanitySync", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "blog",
      data: {
        _id: `blog-${blog.id}`,
        title: blog.title,
        description: blog.description,
        details: blog.details || "",
        imageUrl: blog.image_url,
        createdAt: blog.created_at,
      },
    }),
  });

  const result = await res.json();
  if (!result.success) console.error("Sanity sync error:", result.error);
};

export const syncProjectToSanity = async (project: any) => {
  const res = await fetch("/api/sanitySync", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "project",
      data: {
        _id: `project-${project.id}`,
        title: project.title,
        description: project.description || "",
        link: project.link,
        src: project.image_url ? {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: project.image_url // yaha tumhara Cloudinary/Supabase asset id ya URL
          }
        } : null,
        createdAt: project.created_at,
      },
    }),
  });

  const result = await res.json();
  if (!result.success) console.error("Sanity sync error:", result.error);
};


export const deleteFromSupabaseAndSanity = async (
  type: "contact" | "blog" | "project",
  id: number
) => {
  try {
    const res = await fetch("/api/sanitySync/deleteRoute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, id }),
    });

    const result = await res.json();

    if (!result.success) {
      console.error("Delete error:", result.error);
    } else {
      console.log(`✅ ${type} deleted successfully`);
    }
  } catch (err) {
    console.error("❌ Delete request failed:", err);
  }
};




// // Delete functions bhi same pattern follow karenge
// export const deleteBlogFromSanity = async (id: number) => {
//   await fetch("/api/sanitySync/deleteRoute", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ type: "blog", id }),
//   });
// };

// export const deleteProjectFromSanity = async (id: number) => {
//   await fetch("/api/sanitySync/deleteRoute", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ type: "project", id }),
//   });
// };








