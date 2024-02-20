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
        <div className="pt-10 md:pt-48 pb-10 ">
          <div className="">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 ">
              <div className=" pt-16 text-center lg:text-left basis-1/2">
                <div className="px-6 sm:px-8 ">
                  <RichText field={page.data.title} />
                  <div className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                    <span className="text-slate-600 text-center xl:text-left font-normal text-base xl:pl-3 mx-auto pt-4">
                      {page.data.publication_date
                        ? dateFormatter.format(
                            new Date(page.data.publication_date)
                          )
                        : ""}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <PrismicNextImage field={page.data.main_image} />
              </div>
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

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
