import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { BlogCard } from "@/components/BlogCard";
import { RichText } from "@/components/RichText";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Recent() {
  const client = createClient();

  /**
   * Fetch all of the blog posts in Prismic (max 3), excluding the current one, and ordered by publication date.
   *
   * We use this data to display our "recommended posts" section at the end of the blog post
   */
  const posts = await client.getAllByType("blog_post", {
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 3,
  });

  // Destructure out the content of the current page

  return (
    <Suspense fallback="Loading">
      <ul className="flex flex-col xl:flex-row gap-12 w-full ">
        {posts?.map((post) => (
          <li className="basis-1/3" key={post.uid}>
            <BlogCard key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_post");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
