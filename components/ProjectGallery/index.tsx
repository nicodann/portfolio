import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ProjectGallery() {
  type Project = {
    name: string;
    image_url: string;
    github_url: string;
    description: string;
  }

  const projects: Project[] = [
   
    {
      name:"handydown", 
      image_url:"/images/handydown.png",
      github_url:"https://github.com/nicodann/handydown",
      description:
        "A Full-Stack CRUD App for donating used youth athletic equipment that your family has outgrown. Like a buy-and-sell without the money. React | MUI | Node | Express | Sequelize | Postgres"
    },
    {
      name: "PlotTwist", 
      image_url:"",
      github_url:"https://github.com/todd-demone/PlotTwist",
      description:
        "PlotTwist is a full-stack social app that allows users to collaborate on writing a short story."
    },
    {
      name:"scheduler", 
      image_url:"/images/scheduler.png",
      github_url:"https://github.com/nicodann/scheduler",
      description:
        "A Dynamic Interview Scheduler App - React, Bootstrap, SASS, Testing: End-to-End with Cypress and Components with Storybook"
    }, 
  ]
  return (
    <section className="flex flex-row justify-center min-w-full gap-4 flex-wrap">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-6 bg-amber-50 p-4 justify-between">
            <h2>{project.name}</h2>
            <div className="flex flex-col gap-4 relative">
              <Image src={project.image_url} alt={project.name} fill/>
              <p id="project_description" className="max-w-80">{project.description}</p>
            </div>
            <footer>
              <Link href={project.github_url}>github</Link>
              {/* <p>{project.github_url}</p> */}
            </footer>
          </div>
        ))}
      </section>
  )
}
