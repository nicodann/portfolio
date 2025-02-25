"use client"

import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';

// import {  GlobalWorkerOptions } from "pdfjs-dist";

// GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function Resume() {
  const windowWidth: number = useWindowWidth()
  const [pdfWidth, setPdfWidth] = useState<number>(0);

  
  useEffect(() => {
    if (windowWidth < 500) {
      setPdfWidth(300);
    } else if (windowWidth > 500 && windowWidth < 768) {
      setPdfWidth(500);
    }  else if (windowWidth > 768 && windowWidth < 1024) {
      setPdfWidth(768);
    } else if (windowWidth > 1024) {
      setPdfWidth(1024);
    } 
  }, [windowWidth]);

  return (
    <div id="resume" className="flex justify-center">
      <Document
        file="/files/Nico_Dann-Web_Developer_Resume_2025.pdf"
        loading="Loading..."
      >
        <Page 
          pageNumber={1} 
          renderTextLayer={false} 
          renderAnnotationLayer={false}
          width={pdfWidth}
        />
      </Document>
    </div>
  )
}
