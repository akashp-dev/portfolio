"use client";
import React from "react";
import { SiSnowflake, SiTableau, SiR } from "react-icons/si";
import { motion, Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export function TechnologiesSection() {
  return (
    <section className="container py-16" id="technologies">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-20 w-20" />
        </motion.div>
        <motion.div variants={iconVariants(3.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="h-20 w-20" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="h-20 w-20" />
        </motion.div>
        <motion.div variants={iconVariants(4.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" alt="Excel" className="h-20 w-20" />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-indigo-400" />
        </motion.div>
        <motion.div variants={iconVariants(5.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiR className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-20 w-20 object-contain" />
        </motion.div>
        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSnowflake className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter" className="h-20 w-20" />
        </motion.div>
        <motion.div variants={iconVariants(4.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" className="h-20 w-20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
