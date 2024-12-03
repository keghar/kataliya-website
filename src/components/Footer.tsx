import { JSX, SVGProps } from "react";
import Container from "./Container";
import { Button } from "./Button";
import Divider from "./Divider";
import Heading from "./Heading";
import { FAQ } from "./FAQ";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import logoMain from "../../public/kataliyalogo.png";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ],

  contact_info: [
    {
      text: "kataliyaenterprises@gmail.com",
      href: "mailto:kataliyaenterprises@gmail.com",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          {...props}>
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      ),
    },
    {
      text: "808-727-0518",
      href: "tel:808-727-0518",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          {...props}>
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
      ),
    },
  ],

  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/KataliyaRudolphPRMG/",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kataliyarudolphprmg/",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="https://www.linkedin.com/in/kataliya/"
          viewBox="0 0 448 512"
          {...props}>
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      ),
    },

    // {
    //   name: "YouTube",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
};
// [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]
export default function Footer() {
  return (
    <Container className="bg-gradient-to-b from-transparent to-[#cfc0fb]">
      <div className="pb-0" id="sign-up">
        <div className="mx-auto ">
          <Image
            src={logoMain}
            alt="Kataliya enterprises logo"
            width={400}
            height={400}
            className="mx-auto"
          />
          <div className="mx-auto">
            <p className="text-center text-2xl text-[#57257d]">
              Kataliya Enterprises
            </p>
          </div>
          <div className="relative mx-auto isolate overflow-hidden  inset-0   px-6 py-10 sm:px-24 xl:py-10 bg-gradient-to-b from-white to-[#cfc0fb]">
            <footer
              id="footer"
              className="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8 mt-10">
              <nav
                className="-mb-6 columns-2 flex justify-center space-x-12"
                aria-label="Footer">
                {navigation.main.map((item) => (
                  <div key={item.name} className="pb-6">
                    <Link
                      href={item.href}
                      className="font-semibold leading-6 text-slate-800 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
              <div className="flex flex-col items-center justify-center mt-10 mx-auto gap-4">
                <span className="font-semibold mx-auto border-b border-gray-800 px-4">
                  Contact
                </span>
                {navigation.contact_info.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="text-slate-800 hover:text-gray-500 flex items-center gap-2 mx-auto">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    <span>-{item.text}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-center space-x-10">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-800 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col text-center pt-10">
                {" "}
                <Link className="underline text-xs" href="/privacy">
                  Privacy Policy
                </Link>
              </div>
              <p className="mt-10 text-center text-xs leading-5 text-slate-800">
                Copyright &copy; {new Date().getFullYear()} Kataliya
                Enterprises. All rights reserved.{" "}
              </p>
              <div className="w-full mx-auto"></div>
            </footer>
            <svg
              className="opacity-30 rotate-180 bottom-0 left-0 absolute w-full"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              preserveAspectRatio="none"
              fill="#f0ecff"
              viewBox="0 0 1200 120">
              <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0Z"
                className="shape-fill"
                opacity={0.25}
              />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0Z"
                className="shape-fill"
                opacity={0.5}
              />
              <path
                d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0Z"
                className="shape-fill"
              />
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
}
