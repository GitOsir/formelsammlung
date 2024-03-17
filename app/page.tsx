import Image from "next/image";

export default function Home() {

  const subjects = [
    {name:"Mathematik", icon:""},
    {name:"Physik", icon:""},
    {name:"Chemie", icon:""},
    {name:"Informatik", icon:""},

  ]
  
  const subjectBoxes = [];
  for(let i=0;i<subjects.length;i++){
    subjectBoxes[i] = (

    <button className=" flex items-center justify-center p-5 w-44 h-24 rounded-xl border shadow-md">
      <p>{subjects[i].name}</p>
    </button>
    
    );
  }


  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className=" flex flex-row gap-44">
        {subjectBoxes}
      </div>

    </div>
      
  );
}
