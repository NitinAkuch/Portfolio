import AnimatedTexts from "@/components/AnimatedTexts";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import EcommImg from "../../public/images/projects/AngelloEcommerce.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6
      "
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:text-dark dark:bg-light sm:px-4 sm:text-base"
          >
            Visit the Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, status }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10 md:w-8 dark:text-light">
            <GithubIcon />
          </Link>
          <p className="text-red-700">{status ? "Under Development" : ""}</p>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg border border-solid border-dark  p-2 px-6 text-lg font-semibold hover:bg-dark hover:text-light dark:text-light dark:bg-dark hover:dark:bg-light hover:dark:text-dark dark:border-light md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nitin Akuch | Projects Page</title>
        <meta name="description" content="ProjectsDescription" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedTexts
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8">
            <div className="col-span-12">
              <FeaturedProject
                title="Angello E-Commerce"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://angelloecommerce.vercel.app/"
                type="Featured"
                img={EcommImg}
                github="https://github.com/NitinAkuch/E-Commerce"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Angello Social Media (Angello Book)"
                link="https://angelloecommerce.vercel.app/"
                type="Experimental"
                img={EcommImg}
                github="https://github.com/NitinAkuch/E-Commerce"
                status="Under Development"
              />
            </div>
            <div className="col-span-6">Projects2</div>
            <div className="col-span-12">Featured Projects2</div>
            <div className="col-span-6">Projects3</div>
            <div className="col-span-6">Featured Projects4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
