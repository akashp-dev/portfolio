"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="pb-4" id="about">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center">
        {/* Ghibli Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center p-4"
        >
          <img
            src="/image.png"
            alt="Ghibli Illustration"
            className="rounded-xl shadow-lg w-[300px] md:w-[400px] lg:w-[450px] object-cover"
          />
        </motion.div>

        {/* About Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center p-4 lg:p-12"
        >
          <p className="flex flex-wrap items-center justify-center">
            {`I am a Data Analyst and Data Engineer with over 2 years of experience transforming raw data into strategic business insights across industries including retail, healthcare, and manufacturing. I specialize in Python, SQL, AWS, and Power BI to build scalable ETL pipelines, optimize large-scale datasets, and design real-time dashboards. At McKinsey, I led efforts to reduce fulfillment delays by 15%, accelerate reporting cycles by 40%, and drive $2M in projected revenue through data pipeline automation and ML integration. My previous roles at Dell and Trigent involved streamlining analytics workflows using tools like AWS Glue, Redshift, MongoDB, and Matplotlib. I'm also certified in Power BI, AWS SysOps, and OCI Gen AI, and hold a Master's in Computer Science from California State University, Long Beach. My mission is to create data-driven solutions that drive measurable business impact.`}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
