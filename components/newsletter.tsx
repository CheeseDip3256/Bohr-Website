"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsV0 } from "@/lib/context";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
};

export const Newsletter = () => {
  const isInitialRender = useRef(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
      {/* Email in bottom right corner */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
        <a 
          href="mailto:rohil@bohrsystems.us"
          className="font-kanit text-lg md:text-xl lg:text-2xl text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-pointer"
        >
          rohil@bohrsystems.us
        </a>
      </div>

      {/* LinkedIn icon in bottom center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-6 lg:bottom-8">
        <a 
          href="https://www.linkedin.com/company/bohr-systems/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-foreground transition-colors duration-200"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
      <motion.div
        layout="position"
        transition={{ duration: DURATION, ease: EASE_OUT }}
      >
        <h1 className="font-prosty-extended text-5xl font-bold short:lg:text-8xl sm:text-8xl lg:text-9xl text-foreground">
          Bohr Systems
        </h1>
      </motion.div>

      <div className="flex flex-col items-center min-h-0 shrink">
        <AnimatePresenceGuard>
          {!isOpen && (
            <motion.div
              key="newsletter"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
              }}
            >
              <div className="flex flex-col gap-4 w-full max-w-4xl md:gap-6 lg:gap-8">
                <motion.h2
                  initial={isInitialRender.current ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                  className="font-kanit text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-center text-foreground leading-tight"
                >
                  Robust Navigation for Military Drones in GPS-Denied Environments
                </motion.h2>
              </div>
            </motion.div>
          )}


        </AnimatePresenceGuard>
      </div>
    </div>
  );
};

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  const isV0 = useIsV0();

  return isV0 ? <>{children}</> : <AnimatePresence mode="popLayout" propagate>{children}</AnimatePresence>;
};
