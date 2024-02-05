import links from '@/data/links.json'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-12 flex-wrap justify-between w-full">
          <h1>
            Nico Dann
          </h1>

          <section className="flex flex-col items-end">
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

        </header>
  )
}
