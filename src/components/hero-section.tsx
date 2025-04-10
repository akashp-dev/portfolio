"use client";

import { motion, Variants } from "framer-motion";

const container = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export function HeroSection() {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35 container">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl md:text-6xl lg:text-8xl font-extralight tracking-tight lg:mt-16"
            >
              Akash Ponnam
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-violet-400 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent"
            >
              Data Analyst
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl my-4 font-light tracking-tighter"
            >
              Data Analyst with expertise in SQL, Python, and Power BI. Skilled in developing data models,
              creating actionable insights from large datasets, and building automated reporting solutions.
              Certified AWS Cloud Practitioner and Oracle Generative AI Professional with experience in
              Snowflake data warehousing and business intelligence tools.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
