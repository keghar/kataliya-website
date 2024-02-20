import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Container from "@/components/Container";
import { RichText } from "@/components/RichText";
import { BlogCard } from "@/components/BlogCard";
import { PrismicNextLink } from "@prismicio/next";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blog_page");

  const posts = await client.getAllByType("blog_post", {
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      <Container>
        <div className=" pt-32 flex flex-col justify-center">
          <div className="mx-auto">
            <RichText field={page.data.title} />
          </div>
          <div className="mx-auto mt-2">
            <RichText field={page.data.description} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-8 min-h-lg px-4 mx-auto place-content-evenly">
            {posts.map((post) => (
              <li className="max-w-lg xl:max-w-none min-h-lg" key={post.uid}>
                <BlogCard key={post.id} post={post} />
              </li>
            ))}
          </ul>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </Container>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
