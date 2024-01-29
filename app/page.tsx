import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const links = [
    {
      name:'github',
      href:'https://github.com/nicodann'
    },
    {
      name: 'linkedIn',
      href: 'https://www.linkedin.com/in/nicodann/'
    },    
  ]

  const projects = [
    {
      name:"Tweeter", 
      image_url:"",
      description:
        "Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus"
      }, 
    {
      name:"handydown", 
      image_url:"",
      description:
        "Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus"
      },
    {
      name: "log", 
      image_url:"",
      description:
        "Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus. Lorem ipsum goonum wobby dragon mutem ignoramus"
      }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <section className="flex gap-12">
        <h1>
          Nico Dann
        </h1>

        <section className="flex flex-col items-center">
          <h2>
            Full Stack Web Developer
          </h2>

          <section className="flex gap-2">
            {links.map((link,i) => <h2 key={i}><Link href={link.href}>{link.name}{i < links.length -1 && '|'}</Link></h2>)}
          </section>

        </section>
      </section>

      <section className="flex flex-row justify-between min-w-ful gap-4">
        {projects.map((project, i) => (
          <div key={i} className="bg-amber-50 p-4">
            <h2>{project.name}</h2>
            <div id="project_description" className="max-w-80">{project.description}</div>
          </div>
        ))}
      </section>
    </main>
  )
}
