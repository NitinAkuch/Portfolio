import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
// import LiIcon from "./LiIcon";

const Work = () => {
  return (
    <div className="font-medium w-full md:text-sm">
      <p>Assisted with the development and maintenance of web applications.</p>
      <br />
      <p>
        -Maintained and enhanced two large-scale applications, increasing
        performance by 20%
      </p>
      <br />
      <p>
        -Gained hands-on experience with JavaScript, React and React Redux.
        Implemented React Hooks in 3+ projects, enhancing code reusability and
        efficiency.
      </p>
      <br />
      <p>
        -Contributed to frontend development with a primary focus on React-based
        applications. Collaborated with cross-functional teams to ensure timely
        delivery of project milestones.
      </p>
      <br />
      <p>
        -Designed and developed the front-end applications using ReactJS with
        3,000+ reusable components, Material-UI and Redux. Improved code
        manageability and reusability by 20%
      </p>
      <br />
      <p>
        -Improved application performance by optimization and reducing load
        times resulting increase in page speed across different web browsers.
      </p>
      <br />
      <p>
        -Designed a responsive user interface through TailwindCSS, and designed
        page routing through React-Router DOM.
      </p>
      <br />
      <p>
        -Integrated RESTful services into software solutions, improving response
        times by 25%
      </p>
      <br />
      <p>
        -Debugged and resolved application issues to improve user experience.
        Worked with the QA team to resolve bugs and ensure the delivery of
        high-quality software products.{" "}
      </p>
      <br />
      <p>
        -Worked in an Agile development team of 8 to deliver high-quality
        software under strict timelines.
      </p>
      <br />
      <p>
        -Assisted in developing software using RESTful APIs with Node.js and
        Express.js and helped integrate charts libraries based on D3.js and
        React.js.
      </p>
    </div>
  );
};

const Details = ({ position, company, companyLink, time, address }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      {/* <LiIcon /> */}
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-lightv xs:text-sm">
          {time} | {address}
        </span>
        {/* <p className="font-medium w-full md:text-sm">{work}</p> */}
        <Work />
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-12 w-full text text-center
      md:text-6xl xs:xs-4xl md:mb-16
      "
      >
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Enrichepro Software Pvt Ltd."
            companyLink=""
            time="2021 May - Present"
            address="Pune, India"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
