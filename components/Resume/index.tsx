"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { motion } from "motion/react";

// import {  GlobalWorkerOptions } from "pdfjs-dist";

// GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function Resume() {
  const windowWidth: number = useWindowWidth();
  const [pdfWidth, setPdfWidth] = useState<number>(0);

  useEffect(() => {
    document.getElementById("nav")?.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  useEffect(() => {
    if (windowWidth < 500) {
      setPdfWidth(300);
    } else if (windowWidth > 500 && windowWidth < 768) {
      setPdfWidth(500);
    } else if (windowWidth > 768 && windowWidth < 1024) {
      setPdfWidth(768);
    } else if (windowWidth > 1024) {
      setPdfWidth(1024);
    }
  }, [windowWidth]);

  return (
    <motion.section
      id="resume"
      className="flex justify-center"
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        id="resume_wrapper"
        className="
          rounded-[1em]
          overflow-hidden
        "
      >
        <Document
          file="/files/Nico_Dann-Web_Developer_Resume_2025.pdf"
          loading="Loading..."
          onLoadSuccess={() => document.getElementById("nav")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={pdfWidth}
          />
        </Document>
      </div>
    </motion.section>
  );
}
