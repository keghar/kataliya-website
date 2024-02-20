import Container from "@/components/Container";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText as Main } from "@/components/RichText";

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Container
      as="article"
      className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div className="flex justify-center flex-col mx-auto max-w-4xl gap-y-4 p-3 pt-10">
        {" "}
        <Main field={slice.primary.main_content} />
      </div>
    </Container>
  );
};

export default RichText;
