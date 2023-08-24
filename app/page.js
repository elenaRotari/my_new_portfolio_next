"use client";
import Image from "next/image";

import ParticlesContainer from "./components/ParticlesContainer";
import Avatar from "./components/Avatar";
import ProjectsBtn from "./components/ProjectsBtn";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Motion from "./components/MotionDiv";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          <Motion
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {" "}
            Turning Lines of Code <br /> into{" "}
            <span className="text-accent"> Digital Stories.</span>
          </Motion>
          <Motion
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 xl:mb-5"
          >
            Welcome to my Web Developer Portfolio! 🌐 Explore a collection of my
            innovative web projects, sleek designs, and efficient code. From
            responsive layouts to interactive user experiences, this portfolio
            showcases my dedication to creating impactful online solutions.
            Browse through the projects to witness my skills in HTML, CSS,
            JavaScript, and more. Let's bring your digital vision to life!
          </Motion>
          <div className="flex justify-center relative xl:hidden">
            <ProjectsBtn />
          </div>
          <Motion
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </Motion>
        </div>
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
