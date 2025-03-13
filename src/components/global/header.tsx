"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SiteActions } from "./site-actions";
import { Menubar } from "./navbar";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define the animation properties for better control
  const topSectionVariants = {
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* Always present container with fixed height animation */}
      <motion.div
        variants={topSectionVariants}
        initial="visible"
        animate={scrolling ? "hidden" : "visible"}
        className="overflow-hidden bg-[var(--background)] shadow-lg shadow-black/5"
      >
        <div className="flex w-full items-center justify-between px-10 py-3 md:px-20">
          <Image
            width={100}
            height={50}
            className="h-[50px] w-auto"
            src="/assets/img/bees-logo-full.png"
            alt="Bees Logo"
          />
          <SiteActions />
        </div>
      </motion.div>

      {/* Navbar section - always visible */}
      <div className="flex w-full justify-center bg-transparent">
        <motion.div
          className={cn(
            "flex w-1/4 min-w-fit justify-center rounded-b-xl bg-[var(--foreground)] text-[var(--background)] shadow-md transition-all",
            scrolling && "w-full rounded-none",
          )}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          animate={{ y: scrolling ? 0 : 0 }}
        >
          <Menubar />
        </motion.div>
      </div>
    </div>
  );
};
