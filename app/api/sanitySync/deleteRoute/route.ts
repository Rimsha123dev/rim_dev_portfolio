import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-08-21",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // must be service role key!
);

export async function POST(req: NextRequest) {
  try {
    const { type, id } = await req.json();

    if (!type || !id) {
      return NextResponse.json({ success: false, error: "Missing type or id" });
    }

    // --- Supabase Delete ---
    if (type === "blog") {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw new Error(`Supabase blog delete failed: ${error.message}`);
    }

    if (type === "project") {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw new Error(`Supabase project delete failed: ${error.message}`);
    }

    if (type === "contact") {
      const { error } = await supabase.from("contacts").delete().eq("id", id);
      if (error) throw new Error(`Supabase contact delete failed: ${error.message}`);
      return NextResponse.json({ success: true });
    }

    // --- Sanity Delete ---
    let sanityId = id.toString();
    if (type === "blog") sanityId = `blog-${id}`;
    if (type === "project") sanityId = `project-${id}`;

    try {
      await sanity.delete(sanityId);
    } catch (err: any) {
      console.error("Sanity delete failed:", err.message || err);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Delete error:", err.message || err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
