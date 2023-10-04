import Navbar from "../components/navbar";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col text-3xl border w-1/2">
               <div className="flex justify-center">Resume</div>
               <div className="flex justify-center">
                  {/* pdfjs uses a web worker to process the most tasks which take
                  time such as parsing and rendering a PDF document. */}
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                     <Viewer fileUrl="resume.pdf" />
                  </Worker>
               </div>
            </div>
            <div className="flex text-3xl border w-1/2 justify-center">
               Hello BeyondMD!
            </div>
         </div>
      </>
   );
}
