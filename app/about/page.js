//  data
"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import Circles from "../components/Circles";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaNode />,
          <SiMongodb />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiBootstrap />, <SiMui />, <SiTailwindcss />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hidden xl:flex absolute bottom-0 xl:-left-[70px]   "
      >
        <Avatar />
      </motion.div>
      <div className="flex flex-col justify-center h-full container mx-auto xl:flex-row  ">
        <div></div>
        <div>
          <div>
            {aboutData.map((item, key) => {
              return <div> {item.title}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
