
import MainPage from '@/containers/MainPage';

// import {  GlobalWorkerOptions } from "pdfjs-dist";

// GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.mjs",
  //   import.meta.url
  // ).toString();
  
  // import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function Home() {  
  return (
    <MainPage />
  )
}
