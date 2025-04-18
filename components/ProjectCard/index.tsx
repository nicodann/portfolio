import { Project } from "@/types/Project"
import Image from "next/image"

export default function ProjectCard({i, project}:{i: number, project: Project}) {
  const mainLink = project.url ? project.url : project.github_url ? project.github_url : "";

  
  return (
    <div 
      key={i} 
      id='project_card_wrapper' 
      className='
        flex 
        justify-center 
        content-center
        p-2
        hover:p-0        
        w-80
        h-[500px]
        '
      >
      <div         
        id="project_card"
        className="
          flex 
          flex-col 
          gap-6 
          bg-amber-50 
          p-4 
          justify-between 
          sm:w-80
          shadow-4xl
          rounded-2xl 
          "
      >
        <a href={mainLink} target="_blank">
          <div className="flex flex-col gap-4 text-black relative min-h-96">
            <h2>{project.name}</h2>
            <div className='relative min-h-32'>
              <Image 
                src={project.image_url} 
                alt={project.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover object-top" 
                priority
              />
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <p id="project_description" className="max-w-80">{project.description}</p>
              <p id="project_tech" className="max-w-80">{project.tech}</p>
            </div>
          </div>
        </a>      
        <footer className='flex justify-between'>
        
          <div>
            {project.url && 
              <a
                target="_blank"
                href={project.url}
              >
                Open the site/app.
              </a>    
            }
          </div>
          <div>
            {project.github_url &&
              <a
                target="_blank"
                href={project.github_url}
              >
                See the code.
              </a> 
            }
          </div>
        </footer>
      </div>  
    </div>
  )
}