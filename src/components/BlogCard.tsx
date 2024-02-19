import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";
import { JSX } from "react";
const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

export const BlogCard = ({
  post,
}: {
  post: Content.BlogPostDocument;
}): JSX.Element => {
  const { data } = post;

  return (
    <PrismicNextLink className="" key={post.id} document={post}>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-100 hover:bg-[#d7cbfc]/20 min-h-full">
        <div className="flex-shrink-0">
          <PrismicNextImage
            field={data.main_image}
            className="h-48 w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between bg-transparent p-6 ">
          <p className="text-sm opacity-75 text-slate-700 border-b-2 w-full pb-1">
            {post.data.publication_date
              ? dateFormatter.format(new Date(post.data.publication_date))
              : ""}
          </p>

          <div className="mt-2 block">
            <div className="font-bold text-slate-700">
              <PrismicText field={data.title} />
            </div>
            <div className="mt-3 text-slate-700">
              <RichText field={data.description} />
            </div>
          </div>
        </div>
      </div>
    </PrismicNextLink>
  );
};
