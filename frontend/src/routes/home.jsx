import Navbar from "../components/navbar";

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col text-3xl border w-1/2">
               <div className="flex justify-center">Resume</div>
               <div className="flex justify-center">put pdf here</div>
            </div>
            <div className="flex text-3xl border w-1/2 justify-center">
               Hello BeyondMD!
            </div>
         </div>
      </>
   );
}
