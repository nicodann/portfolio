import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import projectsData from '@/data/projects.json'

export default function ProjectGallery() {
  type Project = {
    name: string;
    url?:string;
    image_url: string;
    github_url: string;
    description: string;
  }

  const projects: Project[] = projectsData

  const filteredProjects = projects.filter(project => project.image_url)

  
  
  const ProjectBox = ({i, project}:{i: number, project: Project}) => {
    const links: string[] = [
      project.github_url,
    ]

    project.url && links.push(project.url)
    
    return (
      <div key={i} className="flex flex-col gap-6 bg-amber-50 p-4 justify-between w-72 sm:w-80 rounded-2xl shadow-2xl">
        <Link href={project.url ? project.url : project.github_url}>
          <div className="flex flex-col gap-4 text-black">
            <h2>{project.name}</h2>
            <div className='relative min-h-32'>
              <Image src={project.image_url} alt={project.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-top" priority/>
            </div>
            <p id="project_description" className="max-w-80">{project.description}</p>
          </div>
        </Link>
        <footer className='flex justify-between'>
          {
            links.map((link, i) => (
              <Link 
                key={i} 
                href={link}
              >
                {i === 0 ? 'github' : project.name}
              </Link>
            ))
          }            
        </footer>
      </div>  
    )
  }

  return (
    <section className="flex lg:flex-row justify-center flex-wrap gap-4">
        {filteredProjects.map((project, i) => ProjectBox({ project, i }))}
      </section>
  )
}
