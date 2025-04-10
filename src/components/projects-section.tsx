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
      description: "Tune Therapy is a personalized music recommendation system built using sentiment analysis and machine learning algorithms. By analyzing user moods and preferences, it delivers customized playlists aimed at enhancing emotional well-being. Integrated with Spotify APIs for seamless music streaming and real-time mood-based adjustments.",
      technologies: ["Python", "Flask", "React", "Spotify API", "Machine Learning", "NLP"],
      imageUrl: "/TuneTherapy.jpeg",
      githubUrl: "https://github.com/akashp-dev/tune-therapy",
      liveUrl: "",
    },
    {
      id: "mood-movie-recommender",
      title: "Mood-Based Movie Recommendation System",
      description: "A web application that recommends movies based on real-time user mood analysis using NLP and machine learning techniques. Built with React for frontend and Flask backend with integrations to TMDb APIs, the platform personalizes content delivery to enhance user engagement and satisfaction.",
      technologies: ["Python", "Flask", "React", "NLP", "Machine Learning", "TMDb API"],
      imageUrl: "/mrs.jpg",
      githubUrl: "https://github.com/malisettisamrat/mood-movie-recommendation",
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
