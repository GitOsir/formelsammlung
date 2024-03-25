
interface Subject{name:string,href:string,color?:string,icon:string}

const mathematik:Subject = {name:"Mathematik",href:"/subjects/mathematics",color:"bg-sky-500/90",icon:""}
const physik:Subject = {name:"Physik",href:"/subjects/physics",color:"bg-green-500/70",icon:""}
const chemie:Subject = {name:"Chemie",href:"/subjects/chemistry",color:"bg-yellow-400/70",icon:""}
const informatik:Subject = {name:"Informatik",href:"/subjects/compSC",color:"bg-violet-400",icon:""}


export const subjects = [mathematik,physik,chemie,informatik]