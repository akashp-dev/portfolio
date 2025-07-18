"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectProps) {
  return (
    <motion.div
      className="mb-16 flex flex-col md:flex-row gap-8 items-start shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/3 rounded-md overflow-hidden flex justify-center">
        <div className="relative w-40 h-40">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
            crossOrigin="anonymous"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 max-w-3xl">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      id: "tune-therapy",
      title: "Tune Therapy",
      description: "A music mood prediction system using sentiment analysis and NLP techniques. Analyzes lyrics and audio features to identify emotional patterns and recommends songs that match user mood states. Achieved 93% accuracy in mood classification using a custom-trained NLP model. Integrated with Spotify API for seamless playlist generation based on detected emotional patterns.",
      technologies: ["Python", "scikit-learn", "NLP", "Flask", "Spotify API", "ReactJS", "MongoDB"],
      imageUrl: "/TuneTherapy.jpeg",
      githubUrl: "https://github.com/akashp-dev/tune-therapy",
      liveUrl: "",
    },
    {
      id: "sales-forecasting-dashboard",
      title: "Retail Sales Forecasting Dashboard",
      description: "Developed a predictive analytics dashboard for retail sales forecasting. Implemented time series analysis using Prophet and ARIMA models to predict future sales with 88% accuracy. Built interactive visualizations in Power BI that allowed stakeholders to simulate different market conditions and track KPI changes in real time. Reduced forecast error by 22% compared to previous methods.",
      technologies: ["Python", "Prophet", "ARIMA", "Power BI", "SQL", "Azure", "Git"],
      imageUrl: "/retail-dashboard.jpg",
      githubUrl: "https://github.com/akashp-dev/sales-forecasting-dashboard",
      liveUrl: "",
    },
    {
      id: "customer-segmentation-analysis",
      title: "Customer Segmentation Analysis",
      description: "Created a customer segmentation system using machine learning clustering algorithms (K-means, DBSCAN) to identify distinct customer profiles based on purchasing behavior. Visualized segments using interactive dashboards that revealed actionable insights for targeted marketing campaigns. Resulted in a 15% increase in campaign conversion rates for client businesses.",
      technologies: ["Python", "K-means", "DBSCAN", "Tableau", "Pandas", "Scikit-learn", "Matplotlib"],
      imageUrl: "/mrs.jpg",
      githubUrl: "https://github.com/akashp-dev/customer-segmentation",
      liveUrl: "",
    },
  ];

  return (
    <section className="container py-16" id="projects">
      <h2 className="text-3xl font-light mb-12 text-center">
        Projects
      </h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}
