import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Heading from "@/components/Heading";
import { RichText } from "@/components/RichText";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Container>
      <div className="pt-10 md:pt-48 ">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 ">
            <div className=" pt-16 text-center">
              <div className="px-6 sm:px-8 ">
                <Heading
                  as="h1"
                  size="xl"
                  className=" text-slate-600 font-bold tracking-tight ">
                  Contact Info
                </Heading>
                <div className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  <Heading
                    as="h4"
                    size="sm"
                    className=" text-slate-600 font-bold tracking-tight ">
                    Contact us today for all your mortgage needs!
                  </Heading>
                </div>
              </div>
              <div className=" m-20">
                <p className="text-slate-600 font-bold tracking-tight text-xl">
                  Phone:
                </p>
                <Link
                  href="tel:808-727-0518"
                  className="text-slate-600 text-lg hover:text-purple-700">
                  808-727-0518
                </Link>
                <p className="text-xl text-slate-600 font-bold tracking-tight mt-10">
                  Email:
                </p>
                <Link
                  className="text-slate-600 text-lg hover:text-purple-700"
                  href="mailto:kataliyaenterprises@gmail.com">
                  kataliyaenterprises@gmail.com
                </Link>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220350.66414680585!2d-87.6912684!3d30.3515431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872368752fde39b9%3A0x6f899e72ad4d2bd4!2sKataliya%20Rudolph%20-%20Mortgage%20Broker!5e0!3m2!1sen!2sca!4v1724781010563!5m2!1sen!2sca"
                  width="600"
                  height="450"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </Container>
  );
}
