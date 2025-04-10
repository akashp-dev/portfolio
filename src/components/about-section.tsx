"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
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
            {`I am a Data Analyst with a passion for turning complex datasets into actionable insights that drive strategic decision-making. With strong expertise in SQL, Python, Snowflake, and Power BI, I have successfully designed scalable data models, automated reporting workflows, and developed dynamic dashboards for operational visibility.
Currently at Infokeys Inc, I specialize in entity-level performance analysis, building governed data layers, and enabling early anomaly detection across large-scale datasets. My solutions have consistently improved data reliability and reduced turnaround time for executive reporting by over 40%.
Previously at OrionTec, Inc, I contributed to Snowflake-based analytics, data profiling initiatives, and performance optimization strategies, significantly enhancing reporting efficiency.
My technical toolkit spans across modern cloud services like AWS (S3, Redshift, Lambda) and databases like Oracle, PostgreSQL, and MongoDB. I have a deep interest in NLP, predictive analytics, and building intelligent data-driven solutions, showcased through projects like Tune Therapy, where I developed an NLP-based music mood prediction model with over 93% accuracy.
Armed with a Master’s in Computer Science from California State University, Long Beach, and multiple certifications including AWS Cloud Practitioner and Oracle Certified Generative AI Professional, I am committed to continuously learning, innovating, and delivering impactful results.`}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
