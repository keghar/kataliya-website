import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Query the specific category
  const category = await client.getByUID("category", params.uid);

  // Use the category ID to filter for posts with that category
  const pagesInCategory = await client.getAllByType("blog_post", {
    filters: [
      prismic.filter.at("my.blog_post.categories.category", category.id),
    ],
  });

  return (
    <main>
      <ul>
        {pagesInCategory.map((page) => {
          return (
            <li key={page.id}>
              <PrismicNextLink document={page}>
                <PrismicRichText field={page.data.title} />
              </PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const categories = await client.getAllByType("category");

  return categories.map((category) => {
    return { uid: category.uid };
  });
}
