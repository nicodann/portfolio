import links from '@/data/links.json'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row gap-12 flex-wrap justify-between lg:w-full text-center">
          <h1>
            Nico Dann
          </h1>

          <section className="flex flex-col gap-6 sm:gap-0">
            <h2>
              Full Stack Web Developer
            </h2>

            <section className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-end flex-wrap">
              {links.map((link,i) => (
                <>
                  <h2 key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </h2>

                  {i < links.length -1 && 
                    <h2 className='hidden sm:inline'>|</h2>
                  }
                </>
              )
              )}
            </section>

          </section>

        </header>
  )
}
