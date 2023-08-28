"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transtion from "./Transtion";

function MotionDiv({ children, ...props }) {
  const pathname = usePathname();

  return (
    <motion.div {...props} key={pathname}>
      <Transtion />
      {children}
    </motion.div>
  );
}

export default MotionDiv;
