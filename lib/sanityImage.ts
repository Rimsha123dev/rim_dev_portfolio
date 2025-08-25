import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client"; // jo tumhara sanity client hai

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
