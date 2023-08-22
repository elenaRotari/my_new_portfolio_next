"use client";

import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import Transtion from "./components/Transtion";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import "./globals.css";

const metadata = {
  title: "Ellas Portfolio",
  description: "Done with Next.js",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
