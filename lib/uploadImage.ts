import { supabase } from "./supabaseClient";

// 📌 file: actual image file
// 📌 folder: e.g. "blogs" or "projects"
export async function uploadImage(file: File, folder: string) {
  try {
    // Unique filename generate karne ke liye Date.now()
    const fileName = `${folder}/${Date.now()}-${file.name}`;

    // File upload to Supabase bucket
    const { error } = await supabase.storage
      .from("portfolio-assets") // 👈 tumhari bucket ka naam
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("❌ Upload error:", error.message);
      return null;
    }

    // Public URL le aao
    const { data } = supabase.storage
      .from("portfolio-assets")
      .getPublicUrl(fileName);

    return data.publicUrl; // 👈 ye URL DB me save karna hai
  } catch (err) {
    console.error("❌ Exception:", err);
    return null;
  }
}
