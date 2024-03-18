import React from "react";
import {
  AWS,
  ExpressJS,
  JavaScript,
  MongoDB,
  NextJS,
  NodeJS,
  ReactJS,
  Redux,
  Tailwind,
  TypeScript,
} from "./Icons";

const TechIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <AWS className="m-2 w-6 mx-3" />
      <ExpressJS className="m-2" />
      <JavaScript className="m-2" />
      <NodeJS className="m-2" />
      <MongoDB className="m-2" />
      <NextJS className="m-2" />
      <ReactJS className="m-2" />
      <Redux className="m-2" />
      <Tailwind className="m-2" />
      <TypeScript className="m-2" />
    </div>
  );
};

export default TechIcons;
