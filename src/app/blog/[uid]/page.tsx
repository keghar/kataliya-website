import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { RichText } from "@/components/RichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Container from "@/components/Container";
import { components } from "@/slices";
import { Badge } from "@/components/ui/badge";

const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid, {
      fetchLinks: ["category.name"],
    })
    .catch(() => notFound());

  //   const categories: CategoryDocumentData[] = page.data.categories.map(
  //     (item: Simplify<BlogPostDocumentDataCategoriesItem>) =>
  //       item.category as unknown as CategoryDocumentData
  //   );

  //   const posts = await client.getAllByType("blog_post", {
  //     filters: [prismic.filter.not("my.blog_post.uid", params.uid)],
  //     orderings: [
  //       { field: "my.blog_post.publication_date", direction: "desc" },
  //       { field: "document.first_publication_date", direction: "desc" },
  //     ],
  //     limit: 2,
  //   });

  return (
    <>
      <Container className="">
        <div className="pt-20 md:pt-48 pb-10 px-3">
          <div className="flex flex-col xl:flex-row px-2 lg:justify-around justify-center mx-auto xl:max-w-5xl gap-4">
            <div
              className="flex flex-col xl:items-start 
            justify-center basis-1/2 gap-2">
              <div className="mx-auto xl:mx-0">
                <RichText field={page.data.title} />
              </div>
              <div className="mx-auto xl:mx-0">
                {/* <PrismicRichText
                  field={page.data.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-2xl pl-3 text-gray-500">{children}</p>
                    ),
                  }}
                /> */}
              </div>
              <div className="mx-auto xl:mx-0 flex flex-col justify-center">
                {/* <ul className="flex gap-4 ">
                  {categories.map((category) => (
                    <li key={category.name}>
                      {" "}
                      {/* <PrismicNextLink document={category}> */}
                {/* <Badge variant="outline">{category.name}</Badge> */}
                {/* </PrismicNextLink> */}
                {/* </li> */}
                {/* ))} */}
                {/* </ul> */}
                <span className="text-slate-600 text-center xl:text-left font-normal text-base xl:pl-3 mx-auto pt-4">
                  {page?.data.publication_date
                    ? dateFormatter.format(new Date(page.data.publication_date))
                    : ""}
                </span>{" "}
              </div>
            </div>
            <div className="flex overflow-hidden rounded-xl shadow-xl shadow-slate-400 basis-1/2 max-w-prose mx-auto">
              <PrismicNextImage field={page.data.main_image} />
            </div>
          </div>
        </div>
      </Container>

      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("blog_post");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
