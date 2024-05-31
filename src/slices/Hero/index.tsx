import { Button } from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import { RichText } from "@/components/RichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Container
      className=" "
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div className="pt-10 md:pt-48 ">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 ">
            <div className=" pt-16 text-center lg:text-left basis-1/2">
              <div className="px-6 sm:px-8 ">
                <RichText field={slice.primary.title} />
                <div className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  <RichText field={slice.primary.tag} />
                </div>
                <div className="mt-10 flex justify-center gap-4 lg:justify-start h-full">
                  <Button>Blog</Button>

                  <Button href="#footer" variant="outline">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            <div className="basis-1/2 px-6 lg:px-8">
              <PrismicNextImage field={slice.primary.image} priority />
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </Container>
  );
};

export default Hero;
