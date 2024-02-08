"use client";

import links from '@/data/links.json'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

export default function Header({setBgColour}: {setBgColour: (value:string) => void}) {
  const name = 'Nico Dann'
  const letterArray = name.split('')
  const letterArrayUnicode = [...letterArray]

  
  letterArrayUnicode.forEach((letter, i) => {
    if (letter === ' ') {
      letterArrayUnicode[i] = '\u00A0'
    }
  })

  const initialLetterObject = letterArrayUnicode.reduce(
     (a, letter) => {
       return { ...a, [letter]: false }
     }, 
     {}
   )

  const [letterObject, setLetterObject] = useState<{[key:string]:boolean}>(initialLetterObject)
  

  const bgColours = ['#D6DBDC', '#526760','#374B4A','#DA3E52', '#FE5F00'];
  const [colourIndex, setColourIndex] = useState(1);
  const [displayResetButton, setDisplayResetButton] = useState(false);
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    counter !== 1 && setDisplayResetButton(true)
    counter === 1 && setDisplayResetButton(false)
  }, [counter]);

  const incrementColourIndex = () => {
    colourIndex === bgColours.length - 1 ? setColourIndex(0) : setColourIndex(prev => prev + 1);
  }

  const incrementCounter = () => {
    if (counter === name.length) {
      setDisplayResetButton(false)
      setCounter(1)
    } else {
      setCounter(prev => prev + 1)
    }
  }
  

  const handleLetterClick = (letter:string) => {
    console.log("clicked")
    setBgColour(bgColours[colourIndex])
    incrementColourIndex();
    incrementCounter();
    setLetterObject(prev => ({ ...prev, [letter]: true }));
  }

  const handleResetClick = () => {
    setBgColour(bgColours[colourIndex])
    incrementColourIndex();
    setCounter(1);
    setLetterObject(initialLetterObject)
  }

  return (
    <header className='flex flex-col items-center lg:items-start'>
      <div id='#first-row' className="flex flex-col lg:flex-row gap-12 flex-wrap justify-between lg:w-full text-center">
        <div id="#title" className='flex justify-center lg:justify-between'>
          <div className='flex justify-center cursor-pointer'>
            {letterArrayUnicode.map((letter, i) => {
              return (
                <h1
                  key={i}
                  onClick={() => handleLetterClick(letter)} 
                  style={{position: 'relative',
                    top: !letterObject[letter] ? '0px' : '-400px',
                    transition: 'top, 1s'
                  }}
                >
                    {letter}
                </h1>
              )})        
            }
          </div>
        </div>

        <div id='#second_title_plus_subtitle_nav' className='flex flex-col-reverse lg:flex-row gap-6 items-center'>
          <div id='#second_name' className='flex text-black'>
            {letterArrayUnicode.map((letter, i) => {
              return (
                <h1
                  key={i}
                  style={{position: 'relative',
                    // top: letterObject[letter] ? '0px' : '-800px',
                    transition: 'top, 1s',
                    color: bgColours[colourIndex + 2]
                  }}
                >
                    {letter}
                </h1>
              )})     
            }
          </div>

          <div id='#subtitle_nav' className="flex flex-col gap-6 sm:gap-0">
            <h2 style={{color:bgColours[colourIndex + 1]}}>
              Full Stack Web Developer
            </h2>

            <nav className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-end flex-wrap">
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
            </nav>

          </div>



        </div>

      </div>
      <button>
        <h2 
          className='text-white cursor-pointer' 
          onClick={() => handleResetClick()}
          style={{
            visibility: displayResetButton ? 'visible' : 'hidden'
          }}
        >
          RESET
        </h2>
      </button>
    </header>
  )
}
