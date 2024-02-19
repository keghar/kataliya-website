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

const products = [
  {
    name: "Business",
    description: "Get a better understanding where your traffic is coming from",
    href: "/blog/categories/business",
    icon: ChartPieIcon,
  },
  {
    name: "Real Estate",
    description: "Speak directly to your customers with our engagement tool",
    href: "/blog/categories/real-estate",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Health",
    description: "Your customers’ data will be safe and secure",
    href: "/blog/categories/health",
    icon: FingerPrintIcon,
  },
  {
    name: "Food",
    description: "Your customers’ data will be safe and secure",
    href: "/blog/categories/food",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "See All Blogs", href: "/blog", icon: ArrowRightIcon },
  {
    name: "See All Catagories",
    href: "/blog/categories",
    icon: RectangleGroupIcon,
  },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
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
    name: "X",
    href: "#",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
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
        <Popover.Group className="hidden md:flex md:gap-x-12 rounded-2xl z-10">
          <Popover className="max-w-3xl">
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
          </Popover>

          <Link
            href="#about"
            className="text-base font-semibold leading-6 text-gray-700 hover:text-purple-700">
            About
          </Link>
          <Link
            href="#sign-up"
            className="text-base font-semibold leading-6 text-gray-700 hover:text-purple-700">
            Sign-up
          </Link>
        </Popover.Group>
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
              <div className="text-2xl font-bold text-purple-500">KE</div>
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
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
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
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#sign-up"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Sign-up
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  About
                </Link>
              </div>
              <div className="py-6">
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
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
