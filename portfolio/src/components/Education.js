import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
// import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80%]">
      {/* <LiIcon /> */}
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-primaryDark sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-12 w-full text text-center md:text-6xl xs:xs-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor in Engineering"
            time="2014-2018"
            place="M. S. Bidve Engineering College, Latur."
          />
          <Details
            type="Diploma in Engineering"
            time="2011-2014"
            place="Government Polytechnic, Jalna."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
