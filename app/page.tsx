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
        Nico Dann | Full Stack Web Developer
      </h1>

      <section className="flex-row min-w-full bg-red-700">
        {projects.map((project, i) => (
          <div key={i} className="bg-amber-50 max-w-md">
            <h2>{project.name}</h2>
            <div id="project_description" className="max-w-80">{project.description}</div>
          </div>
        ))}
      </section>
    </main>
  )
}
