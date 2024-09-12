import { Project } from "@/types/Project"
import Image from "next/image"
import Link from "next/link"

export default function ProjectBox({i, project}:{i: number, project: Project}) {
  const links: string[] = project.github_url 
  ? [ project.github_url ] 
  : []

  project.url && links.push(project.url)
  
  return (
    <div key={i} className="flex flex-col gap-6 bg-amber-50 p-4 justify-between w-72 sm:w-80 rounded-2xl shadow-2xl">
      {project.url || project.github_url &&
        <Link href={project.url ? project.url : project.github_url}>
          <div className="flex flex-col gap-4 text-black">
            <h2>{project.name}</h2>
            <div className='relative min-h-32'>
              <Image src={project.image_url} alt={project.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-top" priority/>
            </div>
            <p id="project_description" className="max-w-80">{project.description}</p>
          </div>
        </Link>
      }
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