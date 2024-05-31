"use client";
import { Fragment, JSX, SVGProps, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PencilSquareIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";
import Container from "./Container";
import Link from "next/link";

const contact_info = [
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
    text: "251-269-9759",
    href: "tel:251-269-9759",
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
];

const products = [
  {
    name: "Business",
    description: "Get a better understanding where your traffic is coming from",
    href: "/blog/categories/business",
    icon: ChartPieIcon,
  },
  // {
  //   name: "Real Estate",
  //   description: "Speak directly to your customers with our engagement tool",
  //   href: "/blog/categories/real-estate",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Health",
  //   description: "Your customers’ data will be safe and secure",
  //   href: "/blog/categories/health",
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: "Food",
  //   description: "Your customers’ data will be safe and secure",
  //   href: "/blog/categories/food",
  //   icon: SquaresPlusIcon,
  // },
];
const callsToAction = [
  { name: "See All Blogs", href: "/blog", icon: ArrowRightIcon },
];

const socials = [
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
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kataliya/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 448 512" {...props}>
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
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
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-slate-100 px- md:px-6 lg:px-16 ">
      <nav
        className="mx-auto w-full max-w-7xl bg-white flex items-center justify-between p-6 px-8  shadow-xl shadow-slate-200 "
        aria-label="Global">
        <div className="flex md:flex-1">
          {" "}
          <Link href="/" className="-m-1.5 p-1.5 z-20 bg-white h-full">
            <span className="font-medium text-lg text-[#9e82f6]">
              {" "}
              kataliya.ai
            </span>
            {/* <span className="sr-only">Kataliya Enterprises</span>
            <div className="bg-lime-500 rounded-full p-2">
              <div className="bg-purple-500 rounded-full p-2">
                <span className=" text-yellow-300 drop-shadow-sm font-bold text-2xl">
                  KE
                </span>
              </div>
            </div> */}
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* <Popover className="max-w-3xl">
            <Popover.Button className="flex items-center gap-x-1 text-base hover:text-purple-700 font-semibold leading-6 text-gray-700">
              Blog
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1">
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-whit pt-14 shadow-lg max-w-2xl lg:max-w-4xl mx-auto margin 4 bg-white rounded-b-3xl">
                <Popover.Button as="div">
                  <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4 gap-x-4 px-4 py-10 lg:px-8 xl:gap-x-8">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-[#e1dafd]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <a
                          href={item.href}
                          className="mt-6 block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around max-w-5xl my-2 px-4">
                    <div className="flex gap-2">
                      <span>See All Blogs</span>
                      <PencilSquareIcon className="h-6 w-6" />
                    </div>
                    <div className="flex gap-2">
                      <span>See more Categories </span>{" "}
                      <RectangleGroupIcon className="h-6 w-6" />
                    </div>
                  </div>
                </Popover.Button>
              </Popover.Panel>
            </Transition>
          </Popover> */}
        <ul className="hidden md:flex md:justify-center md:gap-6 xl:gap-10 items-center max-w-3xl">
          <li>
            {" "}
            <Link
              href="/#sign-up"
              className="text-base font-semibold leading-6 text-slate-700 hover:text-purple-700">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/blog"
              className="text-base font-semibold leading-6 text-slate-700 hover:text-purple-700">
              Blog
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link
              href="/#about"
              className="text-base font-semibold leading-6 text-slate-700 hover:text-purple-700">
              About
            </Link>{" "}
          </li>
        </ul>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <div className="flex space-x-6">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-800">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kataliya Enterprises</span>
              <div className="text-lg font-semibold text-[#9e82f6]">
                kataliya.ai
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 pt-10">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Blog
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Blog
                </Link>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  About
                </Link>
              </div>
              <div className="py-8 divide-y divide-gray-500/10">
                <div className="flex space-x-6">
                  {socials.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-600 hover:text-slate-800">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col mt-8 gap-4 pt-10">
                  <span className="font-semibold">Contact Info:</span>
                  {contact_info.map((item) => (
                    <Link
                      key={item.text}
                      href={item.href}
                      className="text-slate-800 hover:text-gray-500 flex items-center gap-2 ">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      <span>-{item.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
