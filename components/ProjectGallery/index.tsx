"use client";

import projectsData from "@/data/projects.json";
import { Project } from "@/types/Project";
import ProjectBox from "../ProjectCard";
import { motion } from "motion/react";

export default function ProjectGallery() {
  const projects: Project[] = projectsData;

  const filteredProjects = projects.filter((project) => project.image_url);

  return (
    <section id="project-gallery" className="flex justify-center">
      <div className="flex lg:flex-row justify-center flex-wrap gap-4 max-w-[1200px] text-center">
        {filteredProjects.map((project, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i }}
            >
              <ProjectBox project={project} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
