import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // .env me rakho
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // usually "production"
  apiVersion: "2025-01-01", // koi recent date
  useCdn: true, // faster for public data
});
