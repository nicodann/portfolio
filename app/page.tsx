import ProjectGallery from '@/components/ProjectGallery'
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
            {links.map((link,i) => (
              <h2 key={i}>
                <Link href={link.href}>
                  {link.name}
                </Link>
                {i < links.length -1 && '|'}
              </h2>
            )
            )}
          </section>

        </section>

      </section>
      
      <ProjectGallery />

      
    </main>
  )
}
