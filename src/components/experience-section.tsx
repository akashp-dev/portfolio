"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export function ExperienceItem({ period, title, company, description, technologies }: ExperienceItemProps) {
  return (
    <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-center md:gap-32 text-left">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/4 mb-2 md:mb-0 text-center md:text-right pr-6"
      >
        <span className="text-sm text-muted-foreground">{period}</span>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full md:w-3/4 max-w-2xl"
      >
        <h3 className="text-lg font-medium mb-1">
          {title} - <span className="text-purple-100">{company}</span>
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="mr-2 mt-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      period: "Oct 2024 – Present",
      title: "Data Analyst/Engineer",
      company: "McKinsey & Company, Dallas, CA",
      description: "•At McKinsey & Company, I worked as a Data Engineer and Analyst, leading initiatives that optimized supply chain analytics, automated ETL workflows, and enhanced business intelligence for global clients. I engineered data pipelines using AWS Glue and PyTorch, cutting model training time by 35% and unlocking $2M in projected revenue. My SQL and Power BI work reduced query times by 60% and streamlined reporting across 10M+ records. I also built Flask-based dashboards for real-time insights used by 200+ stakeholders and enforced data governance frameworks that passed audits with zero findings.",
      technologies: ["SQL", "Python", "Power BI", "Snowflake", "AWS", "Data Modeling", "ETL"]
    },
    {
      period: "Jun 2023 – Jun 2024",
      title: "Data Analytics Freelancer",
      company: "Self-Employed",
      description: "• Developed customized data analytics solutions for 3 small businesses, resulting in 20% cost reduction\n• Designed and implemented automated dashboards in Tableau and Power BI for real-time KPI tracking\n• Created predictive models for inventory management using Python and scikit-learn\n• Optimized database queries and ETL processes, improving data processing speed by 35%",
      technologies: ["Python", "SQL", "Tableau", "Power BI", "scikit-learn", "Data Visualization"]
    },
    {
      period: "Aug 2021 – Jul 2022",
      title: "Data Analyst",
      company: "Dell Technologies, India",
      description: "• At Dell Technologies, I contributed as a Data Analyst, automating ETL workflows using AWS Glue and SQL to streamline enterprise data integration and reduce manual effort. I analyzed over 20 GB of raw business data to drive cost analysis and operational insights, while optimizing Power BI reports to enhance visibility for global teams. My dashboards and visualizations supported 100+ users with self-service analytics, and my work with Salesforce and Redshift ensured accurate, scalable reporting across millions of records. I also aligned analytics delivery with Agile practices to improve efficiency and responsiveness to shifting business needs.",
      technologies: ["SQL", "Python", "Snowflake", "Data Analysis", "Excel", "ETL Processes"]
    },
    {
      period: "Feb 2021 – Jul 2021",
      title: "Data Analyst Intern",
      company: "Trigent Software, India",
      description: "• At Trigent Software, I worked as a Data Analyst Intern supporting senior analysts by processing structured and unstructured data using Python and SQL, improving report accuracy and pipeline reliability. I built over four scalable pipelines with AWS services like BigQuery and Dataflow for real-time analytics, and improved data warehousing using MongoDB and Oracle. My work included consolidating enterprise data using Django, enhancing Git-based collaboration, and creating KPI dashboards in Excel to support strategic decisions. I also automated workflows using data mining techniques, boosting efficiency in risk and performance monitoring tasks.",
      technologies: ["Python", "SQL", "Data Extraction", "Data Transformation"]
    }
  ];

  return (
    <section id="experience" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={`${exp.company}-${index}`}
            period={exp.period}
            title={exp.title}
            company={exp.company}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </section>
  );
}
