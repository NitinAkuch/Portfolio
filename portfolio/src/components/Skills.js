import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer  dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={"TailwindCSS"} x="-7vw" y="-11vw" />
        <Skill name={"JavaScript"} x="-19vw" y="3vw" />
        <Skill name={"AWS"} x="-32vw" y="3vw" />
        <Skill name={"ReactJS"} x="0vw" y="12vw" />
        <Skill name={"React-Redux"} x="22vw" y="8vw" />
        <Skill name={"NextJS"} x="-20vw" y="-15vw" />
        <Skill name={"MySQL"} x="-35vw" y="-10vw" />
        <Skill name={"NodeJS"} x="15vw" y="-13vw" />
        <Skill name={"Firebase"} x="30vw" y="-15vw" />
        <Skill name={"CSS"} x="13vw" y="0vw" />
        <Skill name={"ExpressJS"} x="31vw" y="-5vw" />
        <Skill name={"TypeScript"} x="0vw" y="-20vw" />
        <Skill name={"MongoDB"} x="-25vw" y="18vw" />
        <Skill name={"SpringBoot"} x="18vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
