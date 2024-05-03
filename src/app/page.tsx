import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { FAQ } from "@/components/FAQ";
import Divider from "@/components/Divider";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || "",
      description: page.data.meta_description || "",
      images: [page.data.meta_image.url || ""],
    },
  };
}
