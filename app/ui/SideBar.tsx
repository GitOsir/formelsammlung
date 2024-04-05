"use client"

import Link from "next/link"
import { subjects } from "../data/subjects"
import { usePathname } from "next/navigation"
import { topic } from "../types/topic"
import { scrollTo } from "../util/scrollTo"



export const SideBar = ()=>{
    const pathname = usePathname();
    let activeTopics:topic[] = [];

    subjects.map((subject)=>{
        if(subject.href === pathname && subject.topics != null){
            activeTopics = subject.topics;
        }
    })


    return(
        <div className="flex items-center h-[calc(100vh-4rem)] w-24 sticky top-16">
            <div className=" flex justify-center pt-4 w-full h-full bg-slate-300/25 backdrop-filter backdrop-blur-md border-r">
            <div className="flex flex-col gap-4">
                {
                    activeTopics.map(({name,link})=>(
                        <button onClick={()=>scrollTo(link)} className="w-10 h-10 rounded-md bg-slate-400">{name}</button>
                    ))
                }
            </div>

            </div>
        
        </div>
    )


}