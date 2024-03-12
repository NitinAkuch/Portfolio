import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
// import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
      {/* <LiIcon /> */}
      <div>
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light">{info}</p>
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
      <h2 className="font-bold text-8xl mb-12 w-full text text-center">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor in Engineering"
            time="2014-2018"
            place="M.S.Bidve Engineering College Latur"
          />
          <Details
            type="Diploma in Engineering"
            time="2011-2014"
            place="Government Polytechnic Jalna"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
