import Image from "next/image";
import {subjects} from "@/app/data/subjects"

export default function Home() {

  
  const subjectBoxes = [];
  for(let i=0;i<subjects.length;i++){
    subjectBoxes[i] = (

          <a href={subjects[i].href} className=" p-5 w-44 h-24 rounded-xl border shadow-md">
            <p>{subjects[i].name}</p>
          </a>


    );
  }


  return (
    <>

    <h1>Formelsammlung</h1>
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-32">
        {subjectBoxes}
      </div> 
    </div> 
    </>
  );
}
