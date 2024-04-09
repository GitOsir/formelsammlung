import { topic } from "../types/topic"

interface Subject{name:string,href:string,color?:string,icon?:string,topics?:topic[]}

const mathematik:Subject = {
    name:"Mathematik",
    href:"/subjects/mathematics",
    color:"bg-sky-500/90",
    icon:"",
    topics:[
        {name:"Funktionen",link:"functions",icon:"/subjects/mathematics/topic-icons/function.png",
        subtopics:[
            {name:"Funktionstypen",link:"#functionTypes"},
            {name:"ganzrationale Funktionen",link:"#--"},
        ]},
        {name:"Vektoren",link:"vectors",icon:"/subjects/mathematics/topic-icons/vector.png"},
        {name:"Geometrie",link:"geometry",icon:"/subjects/mathematics/topic-icons/geometry.png"},
    ]
}
const physik:Subject = {
    name:"Physik",
    href:"/subjects/physics",
    color:"bg-green-500/70",
    icon:"",
    topics:[
        {name:"Thermodynamik",link:"#--",icon:"",subtopics:[
            {name:"wärme",link:"#--"},
            {name:"kälte",link:"#--"},
            {name:"wärmeübertragung",link:"#--"}
        ]},
        {name:"Frequenzen",link:"#--"},
    ]
}
const chemie:Subject = {
    name:"Chemie",
    href:"/subjects/chemistry",
    color:"bg-yellow-400/70",
    icon:""
}
const informatik:Subject = {
    name:"Informatik",
    href:"/subjects/compSC",
    color:"bg-violet-400",
    icon:""
}


export const subjects = [mathematik,physik,chemie,informatik]