"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import Transtion from "./Transtion";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          <TopLeftImg />
          <Nav />
          <Header />
          <Transtion />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
