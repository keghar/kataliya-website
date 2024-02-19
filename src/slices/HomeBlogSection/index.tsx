"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import { RichText } from "@/components/RichText";
import Recent from "@/components/tabs/Recent";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@radix-ui/react-tabs";
import { Suspense } from "react";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

/**
 * Props for `HomeBlogSection`.
 */
export type HomeBlogSectionProps =
  SliceComponentProps<Content.HomeBlogSectionSlice>;

/**
 * Component for "HomeBlogSection" Slices.
 */
const HomeBlogSection = ({ slice }: HomeBlogSectionProps): JSX.Element => {
  return (
    <Container className="">
      <div className="relative px-6 lg:px-8">
        <div className="relative w-full max-w-7xl bg-white">
          <div className=" flex flex-col justify-center text-white pb-10 bg-white">
            <div className="mx-auto">
              <RichText field={slice.primary.title} />
            </div>
            <div className="mx-auto mt-2">
              <RichText field={slice.primary.description} />
            </div>
          </div>
          <div className="bg-white">
            <Tabs defaultValue="recent" className="w-full ">
              <TabsList className="mx-auto grid grid-cols-2 md:grid-cols-4 text-center bg-[#e1dafd] rounded-lg min-h-42">
                <TabsTrigger
                  value="recent"
                  className=" border-slate-400  focus:border border-0 py-4 hover:bg-slate-100 rounded-lg focus:text-purple-500">
                  Recent Blogs
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className=" border-slate-400 focus:border border-0 hover:bg-slate-100 rounded-lg focus:text-purple-500">
                  Business
                </TabsTrigger>
                <TabsTrigger
                  value="real-estate"
                  className="focus:border border-slate-400 border-0  hover:bg-slate-100 rounded-lg py-4 focus:text-purple-500">
                  Real Estate
                </TabsTrigger>
                <TabsTrigger
                  value="health"
                  className="hover:bg-slate-100 focus:border border-0 border-slate-400 focus:text-purple-500 rounded-lg">
                  Health
                </TabsTrigger>
              </TabsList>

              <TabsContent
                className="mx-auto mt-12 min-h-44 max-w-lg xl:max-w-none"
                value="recent">
                <Recent />
              </TabsContent>

              <TabsContent
                className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
                value="business">
                Business
              </TabsContent>
              <TabsContent
                className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
                value="real-estate">
                Real Estate
              </TabsContent>
              <TabsContent
                className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
                value="health">
                Health
              </TabsContent>
            </Tabs>
            <div className="flex gap-8 justify-center -mt-16">
              <Button>More Blogs</Button> <Button>More Categories</Button>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </Container>
  );
};

export default HomeBlogSection;

// {posts.map((post) => (
//   <div
//   key={post.title}
//   className="flex flex-col overflow-hidden rounded-lg shadow-lg">
//   <div className="flex-shrink-0">
//     <img
//       className="h-48 w-full object-cover"
//       src={post.imageUrl}
//       alt=""
//     />
//   </div>

//   <div className="flex flex-1 flex-col justify-between bg-white p-6">

//     <div className="flex-1">

//       <p className="text-sm font-medium text-indigo-600">
//         <a
//           href={post.category.href}
//           className="hover:underline">
//           {post.category.name}
//         </a>
//       </p>
//       <a href={post.href} className="mt-2 block">
//         <p className="text-xl font-semibold text-gray-900">
//           {post.title}
//         </p>
//         <p className="mt-3 text-base text-gray-500">
//           {post.description}
//         </p>
//       </a>
//     </div>
//     <div className="mt-6 flex items-center">
//       <div className="flex-shrink-0">
//         <a href={post.author.href}>
//           <span className="sr-only">{post.author.name}</span>
//           <img
//             className="h-10 w-10 rounded-full"
//             src={post.author.imageUrl}
//             alt=""
//           />
//         </a>
//       </div>
//       <div className="ml-3">
//         <p className="text-sm font-medium text-gray-900">
//           <a
//             href={post.author.href}
//             className="hover:underline">
//             {post.author.name}
//           </a>
//         </p>
//         <div className="flex space-x-1 text-sm text-gray-500">
//           <time dateTime={post.datetime}>{post.date}</time>
//           <span aria-hidden="true">&middot;</span>
//           <span>{post.readingTime} read</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// ))}
