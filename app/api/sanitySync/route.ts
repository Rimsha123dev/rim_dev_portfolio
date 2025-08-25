// app/api/sanitySync/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-08-25",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (body.type === "blog") {
      const doc = await client.createOrReplace({
        _id: `blog-${body.data.id}`,
        _type: "blog",
        title: body.data.title,
        description: body.data.description,
        details: body.data.details,
        imageUrl: body.data.image_url,
        createdAt: body.data.created_at,
      });
      return NextResponse.json({ success: true, doc });
    }

    if (body.type === "project") {
      const doc = await client.createOrReplace({
        _id: `project-${body.data.id}`,
        _type: "project",
        title: body.data.title,
        link: body.data.link,
        imageUrl: body.data.image_url,
        createdAt: body.data.created_at,
      });
      return NextResponse.json({ success: true, doc });
    }

    return NextResponse.json({ success: false, message: "Invalid type" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false, error: err });
  }
}
