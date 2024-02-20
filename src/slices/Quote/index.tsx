import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { RichText } from "@/components/RichText";
import Container from "@/components/Container";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="md:text-4xl text-3xl xl:text-6xl font-medium font-body text-slate-500 mx-auto">
      {children}
    </p>
  ),
};

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <blockquote className="pt-6 border-l-2 pl-6 text-slate-600 flex gap-l-2 flex-col justify-center max-w-prose text-3xl ">
        <PrismicRichText field={slice.primary.quote} components={components} />
      </blockquote>
    </Container>
  );
};

export default Quote;
