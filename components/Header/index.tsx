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

  const letterObject: {[key:string]:boolean} = letterArrayUnicode.reduce(
    (a, letter) => {
      return { ...a, [letter]: false }
    }, 
    {}
  )

  const bgColours = ['#D6DBDC', '#526760','#374B4A','#DA3E52', '#FE5F00'];
  const [colourIndex, setColourIndex] = useState(1);
  const [disappearingNameArray, setDisappearingNameArray] = useState(letterArrayUnicode)
  const [fallingNameArray, setFallingNameArray] = useState(letterArrayUnicode)
  const [isHoveredOver, setIsHoveredOver] = useState<{[key:number]:boolean}>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  })

  const incrementColourIndex = () => {
    colourIndex === bgColours.length - 1 ? setColourIndex(0) : setColourIndex(prev => prev + 1);
  }
  

  const handleLetterClick = (i:number) => {
    setBgColour(bgColours[colourIndex])
    incrementColourIndex();
    setDisappearingNameArray((prev) => {
      return prev.toSpliced(i,1)
    })
  }

  const handleResetClick = () => {
    setBgColour(bgColours[colourIndex])
    incrementColourIndex();
    setDisappearingNameArray(letterArray)
  }

  useEffect(() => {
    console.log("letterObject:",letterObject)
  }, [letterObject]);

  return (
    <header className="flex flex-col lg:flex-row gap-12 flex-wrap justify-between lg:w-full text-center">
      <div id="#interactive_heading" className='flex justify-between'>
        <div className='flex justify-center cursor-pointer'>
          {disappearingNameArray.length === 0 || disappearingNameArray.length === 1 && disappearingNameArray[0] === '\u00A0'
            ? 
              <h1 className='text-white' onClick={() => handleResetClick()}>
                RESET
              </h1>
            :
              disappearingNameArray.map((letter, i) => (
                <h1 
                  key={i} 
                  // onMouseOver={() => setIsHoveredOver((prev) => {return {...prev, [i]:true}})} 
                  // onMouseLeave={() => setIsHoveredOver((prev) => {return {...prev, [i]: false}})} 
                  onClick={() => handleLetterClick(i)} 
                  style={{
                    background:isHoveredOver[i] ? bgColours[colourIndex + 2] : ''
                  }}
                >
                    {letter}
                </h1>
                ))       
            }
        </div>
      </div>

      <div id='#second_heading_plus_nav' className='flex gap-6'>
        <div id='#second_name' className='flex text-black'>
          {
            fallingNameArray.map((letter, i) => (
              <h1 
                key={i}
                style={{
                  display: letterObject[letter] ? 'relative' : 'none'
                }}
              >
                  {letter}
              </h1>
              ))     
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

    </header>
  )
}
