"use client";

import links from '@/data/links.json'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

export default function Header() {
  const name = 'Nico Dann'
  const letterArray = name.split('')
  const [nameArray, setNameArray] = useState(letterArray)
  
  useEffect(() => {
    console.log("nameArray:",nameArray)
  }, [nameArray]);

  
  return (
    <header className="flex flex-col lg:flex-row gap-12 flex-wrap justify-between lg:w-full text-center">
        <div className='flex bg-red-50'>
          {nameArray.length !== 1
            ? nameArray.map((letter, i) => (
              <h2 key={i} onClick={() => {
                  setNameArray((prev) => {
                    console.log("prev:",prev)
                    return prev.toSpliced(i,1)
                  })
                }}>
                  {letter}
              </h2>
              ))
            : <h2 onClick={() => setNameArray(letterArray)}>RESET</h2>
            }
{/* 
         {letterArray.map((letter, i) => <h2 key={i} onClick={() => {
            letterArray.splice(i,1)
            console.log("New:", letterArray)
          }}>{letter}</h2>)} */}
        </div>

          <section className="flex flex-col gap-6 sm:gap-0">
            <h2>
              Full Stack Web Developer
            </h2>

            <section className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-end flex-wrap">
              {links.map((link,i) => (
                <Fragment key={i}>
              
                  <h2 key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </h2>

                  {i < links.length -1 && 
                    <h2 className='hidden sm:inline'>|</h2>
                  }
                </Fragment>
              )
              )}
            </section>

          </section>

        </header>
  )
}
