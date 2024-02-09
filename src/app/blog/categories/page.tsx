import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Container from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PrismicNextLink } from "@prismicio/next";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("categories_page");
  const categories = await client.getAllByType("category");

  return (
    <Container>
      <RichText field={page.data.title} />
      <RichText field={page.data.description} />
      <SliceZone slices={page.data.slices} components={components} />

      <div className="min-h-screen">
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <PrismicNextLink document={category}>
                  {category.data.name}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("categories_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
