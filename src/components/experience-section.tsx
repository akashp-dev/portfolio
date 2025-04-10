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
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jul 2024 – Present",
      title: "Data Analyst",
      company: "Infokeys Inc (Irving, TX)",
      description: "Designed and executed SQL-based models to analyze entity-level performance trends and track operational KPIs across large-scale datasets. Developed dynamic dashboards in Power BI and Excel for real-time operational visibility. Collaborated on Snowflake data layer implementations and conducted root cause analysis for data anomalies. Automated reporting solutions reduced executive deliverable turnaround by 40%.",
      technologies: ["SQL", "Power BI", "Excel", "Snowflake", "AWS", "Data Modeling", "Automation"]
    },
    {
      period: "Aug 2023 – Jun 2024",
      title: "Open Source Contributor",
      company: "Freelance",
      description: "Contributed to open-source data analytics projects such as DataVista, InsightFlow, and ChartSmart by enhancing interactive dashboards, optimizing SQL queries for large datasets, and improving data visualization using Power BI and Python libraries. Collaborated with distributed teams to integrate APIs, automate reporting workflows, and enhance code maintainability for better scalability. Focused on building accessible, responsive analytics tools and reducing technical debt across projects.",
      technologies: ["Python", "SQL", "Power BI", "Snowflake", "Data Visualization", "Open Source"]
    },
    {
      period: "Jan 2022 – Jun 2022",
      title: "Data Analyst Intern",
      company: "OrionTec, Inc (Vijayawada, India)",
      description: "Conducted data profiling and exploratory analysis across business-critical datasets. Developed automation scripts and optimized Snowflake-based dashboards. Created ad hoc reports and contributed to data model designs that improved query performance by 30%. Assisted in documenting key metrics and BI processes.",
      technologies: ["Python", "SQL", "Snowflake", "Data Analysis", "Automation", "Data Modeling"]
    }
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
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
    </div>
  );
}
