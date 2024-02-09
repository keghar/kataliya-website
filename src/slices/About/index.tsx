import Container from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Container
      className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div className=" max-w-7xl px-6 " id="about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col basis-1/2 justify-center gap-4">
            <div className="max-auto text-center">
              <RichText field={slice.primary.title} />
            </div>
            <RichText field={slice.primary.paragraph} />
          </div>
          <div className="flex justify-center items-center basis-1/2">
            <div className="">
              <PrismicNextImage field={slice.primary.image} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
