import Image from 'next/image'

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Nico Dann
      </h1>
      <h2>
        Full Stack Web Developer
      </h2>

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
