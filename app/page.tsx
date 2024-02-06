"use client";

import Header from '@/components/Header'
import ProjectGallery from '@/components/ProjectGallery'
import { useEffect, useState } from 'react'

export default function Home() {  
  const [bgColour, setBgColour] = useState<string>('')

  useEffect(() => {
    console.log("bgColour:", bgColour)
  }, [bgColour]);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-24 p-4`} style={{background: bgColour}}>
      <div className=" flex flex-col gap-24">
        <Header setBgColour={setBgColour}/>
        <ProjectGallery />
      </div>      
    </main>
  )
}
