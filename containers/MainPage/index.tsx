"use client"

import Header from '@/components/Header'
import ProjectGallery from '@/components/ProjectGallery'
import Resume from '@/components/Resume'
import { useState } from 'react'



export default function MainPage() {
  const [bgColour, setBgColour] = useState<string>('')
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-24 p-4`} style={{background: "#" + bgColour}}>
          <div className=" flex flex-col gap-12 lg:gap-24">
            <Header setBgColour={setBgColour}/>
            <ProjectGallery />
            <Resume />
          </div>      
        </main>
  )
}
