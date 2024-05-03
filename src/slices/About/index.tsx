import Container from "@/components/Container";
import Divider from "@/components/Divider";
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
      <div className=" max-w-7xl px-6 lg:px-8 " id="about">
        <div className="flex flex-col justify-center gap-10">
          <div className="max-auto text-center">
            <RichText field={slice.primary.title} />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="md:float-right">
              <PrismicNextImage field={slice.primary.image} />
            </div>

            <RichText field={slice.primary.paragraph} />
          </div>
        </div>
      </div>
      <Divider />
    </Container>
  );
};

export default About;
