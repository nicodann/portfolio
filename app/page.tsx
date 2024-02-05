import Header from '@/components/Header'
import ProjectGallery from '@/components/ProjectGallery'

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-24 p-4">
      <div className="w-3/5 flex flex-col gap-24">
        <Header/>
        <ProjectGallery />
      </div>
      

      
    </main>
  )
}
