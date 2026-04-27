"use client";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ProjectGallery from "@/components/ProjectGallery";
import Resume from "@/components/Resume";
import { useState } from "react";

const resources = ["projects", "resume"];

export default function MainPage() {
  const [selectedResource, setSelectedResource] = useState(resources[0]);

  return (
    <main className={`flex min-h-screen flex-col justify-center gap-24 w-full`}>
      <div className=" flex flex-col gap-12 lg:gap-24 w-full">
        <Header setSelectedResource={setSelectedResource} />
        <Nav
          resources={resources}
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource}
        />
        <div style={{ minHeight: "100vh" }}>
          {selectedResource === "projects" && <ProjectGallery />}
          {selectedResource === "resume" && <Resume />}
        </div>
      </div>
    </main>
  );
}
