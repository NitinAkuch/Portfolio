import AnimatedTexts from "@/components/AnimatedTexts";
import { LinkArrow } from "@/components/Icons";
import Link from "next/link";
import React from "react";

const articles = () => {
  return (
    <div className="h-[70vh] w-[100vw] flex flex-col items-center justify-center ">
      <AnimatedTexts
        text="Words Can Change The World!"
        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <AnimatedTexts
        text="My Personal Blogs"
        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="flex items-center justify-between mb-12">
        <Link
          href={"https://www.w3schools.com/"}
          target="_blank"
          className=" rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:text-dark dark:bg-light sm:px-4 sm:text-base"
        >
          Visit the Website
        </Link>
        <Link href={"https://www.w3schools.com/"} target="_blank">
          <LinkArrow className={"w-[50px] ml-2 mb-1"} />
        </Link>
      </div>
    </div>
  );
};

export default articles;
