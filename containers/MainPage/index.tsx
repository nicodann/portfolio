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
    <>
      <Header setSelectedResource={setSelectedResource} />
      <main
        className={`flex min-h-screen flex-col justify-center gap-24 w-full`}
      >
        <div className="flex flex-col gap-12 lg:gap-24 w-full">
          <div
            id="blurb"
            className="max-w-[320px] md:max-w-2xl mx-auto p-4 lg:p-0 lg:ml-[120px]"
          >
            <h2>Full stack developer based in Toronto. </h2>
            <p>
              I build beautiful, accessible and user-friendly web experiences
              with clean, modular code under the hood. The kind of code
              that&apos;s easy to maintain, including for future me. I came to
              development through music (two jazz degrees, two decades of gigs
              and teaching), which means I collaborate well, communicate
              clearly, and work well under pressure. Bilingual French/English.
              Passionate about accessibility and good design.
            </p>
          </div>
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
    </>
  );
}
