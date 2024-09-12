import React from 'react'
import projectsData from '@/data/projects.json'
import { Project } from '@/types/Project';
import ProjectBox from '../ProjectBox';

export default function ProjectGallery() {

  const projects: Project[] = projectsData

  const filteredProjects = projects.filter(project => project.image_url)  

  return (
    <section className="flex lg:flex-row justify-center flex-wrap gap-4 max-w-[1200px]">
        {filteredProjects.map((project, i) => ProjectBox({ project, i }))}
      </section>
  )
}
