import links from '@/data/links.json'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row gap-12 flex-wrap justify-between lg:w-full text-center">
          <h1>
            Nico Dann
          </h1>

          <section className="flex flex-col">
            <h2>
              Full Stack Web Developer
            </h2>

            <section className="flex gap-2 justify-center lg:justify-end">
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

        </header>
  )
}
