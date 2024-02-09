import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";
import Container from "@/components/Container";

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
      <blockquote className="mt-6 border-l-2 pl-6 text-slate-600 flex gap-l-2">
        &quot;
        <RichText field={slice.primary.quote} />
        &quot;
      </blockquote>
    </Container>
  );
};

export default Quote;
