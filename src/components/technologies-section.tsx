"use client";
import React from "react";
import { SiSnowflake, SiTableau, SiR, SiPython, SiMysql, SiOracle, SiGit, SiDocker, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaAws, FaChartBar } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiJupyter } from "react-icons/si";
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
      
      <div className="mb-12">
        <h3 className="text-xl font-light mb-4 text-center text-purple-400">Data & Analytics</h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiPython className="text-6xl text-blue-500" />
            <p className="text-center mt-2 text-sm">Python</p>
          </motion.div>
          <motion.div variants={iconVariants(3.0)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiMysql className="text-6xl text-blue-600" />
            <p className="text-center mt-2 text-sm">SQL</p>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <FaChartBar className="text-6xl text-yellow-500" />
            <p className="text-center mt-2 text-sm">Power BI</p>
          </motion.div>
          <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiTableau className="text-6xl text-blue-400" />
            <p className="text-center mt-2 text-sm">Tableau</p>
          </motion.div>
          <motion.div variants={iconVariants(5.0)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiR className="text-6xl text-blue-600" />
            <p className="text-center mt-2 text-sm">R</p>
          </motion.div>
          <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiJupyter className="text-6xl text-orange-500" />
            <p className="text-center mt-2 text-sm">Jupyter</p>
          </motion.div>
          <motion.div variants={iconVariants(4.0)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <RiFileExcel2Fill className="text-6xl text-green-600" />
            <p className="text-center mt-2 text-sm">Excel</p>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-light mb-4 text-center text-purple-400">Cloud & Infrastructure</h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <FaAws className="text-6xl text-yellow-500" />
            <p className="text-center mt-2 text-sm">AWS</p>
          </motion.div>
          <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiSnowflake className="text-6xl text-blue-300" />
            <p className="text-center mt-2 text-sm">Snowflake</p>
          </motion.div>
          <motion.div variants={iconVariants(4.2)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiDocker className="text-6xl text-blue-500" />
            <p className="text-center mt-2 text-sm">Docker</p>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiGit className="text-6xl text-orange-600" />
            <p className="text-center mt-2 text-sm">Git</p>
          </motion.div>
        </motion.div>
      </div>
      
      <div>
        <h3 className="text-xl font-light mb-4 text-center text-purple-400">Databases</h3>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div variants={iconVariants(4.2)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiOracle className="text-6xl text-red-600" />
            <p className="text-center mt-2 text-sm">Oracle</p>
          </motion.div>
          <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiMongodb className="text-6xl text-green-500" />
            <p className="text-center mt-2 text-sm">MongoDB</p>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl p-4">
            <SiPostgresql className="text-6xl text-blue-500" />
            <p className="text-center mt-2 text-sm">PostgreSQL</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
