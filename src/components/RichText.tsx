import { RichTextField } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";

import Heading from "./Heading";
import { PrismicNextLink } from "@prismicio/next";

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className=" text-slate-600 font-bold tracking-tight ">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="font-semibold text-slate-600 pt-8 pb-3">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="md"
      className=" text-slate-600 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className=" text-lg text-slate-600 leading-7 [&:not(:first-child)]:mt-6 ">
      {children}
    </p>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="font-medium text-slate-600 underline underline-offset-4">
      {children}
    </PrismicNextLink>
  ),
  list: ({ children }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  oList: ({ children }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};
