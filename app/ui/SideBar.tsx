"use client"

import Link from "next/link"
import { subjects } from "../data/subjects"
import { usePathname } from "next/navigation"
import { topic } from "../types/topic"
import { scrollTo } from "../util/scrollTo"
import { useState } from "react"
import Image from "next/image"


type SideBarTopic = topic & {open?:boolean,setOpen?:any}

export const SideBar = ()=>{
    const pathname = usePathname();
    let sideBarTopics:SideBarTopic[] = [];
    

    subjects.map((subject)=>{
        if(subject.href === pathname && subject.topics != null){
            for(let i = 0;i<subject.topics.length;i++){
                sideBarTopics[i] = subject.topics[i];
                [sideBarTopics[i].open,sideBarTopics[i].setOpen] = useState(false);
            }

        }
    })

    const [sideBarOpen,setSideBarOpen] = useState(false);

    return(
        <>
        {
            sideBarOpen === false ?(
                /*small sidebar with less information when sideBarOpen == false*/
                <div className={`flex items-center h-[calc(100vh-4rem)] w-[30em] sticky top-16`}>
                <div className=" flex justify-center pt-4 w-full h-full bg-slate-300/25 backdrop-filter backdrop-blur-md border-r">
                    <div className="flex flex-col gap-4">
                        <button onClick={()=>setSideBarOpen(!sideBarOpen)} className="flex items-center justify-center -rotate-90">
                            <Image width={30} height={30} alt="icon" src={"/arrow.png"}></Image>
                        </button>
                        {
                            sideBarTopics.map(({link,icon})=>(
                                <button onClick={()=>scrollTo(link)} className="flex items-center justify-center size-10 hover:shadow-lg rounded-full bg-slate-300 shadow-md">
                                    <Image width={30} height={30} alt="icon" src={icon != null?icon:""}></Image>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            ):(
                /*Wider Sidebar with more Information and Subtopics */
                <div className={`flex items-center h-[calc(100vh-4rem)] w-[2000px] sticky top-16`}>
                    <div className="pt-4 w-full h-full bg-slate-300/25 border-r">
                        <div className="size-96 bg-violet-400/55 rounded-full absolute -z-10 blur-3xl top-2/4 right-3/4"></div>
                        <div className="flex px-3 flex-col gap-3">

                            <div className="flex justify-end">
                            {/*Button to set Sidebar to false or true */}
                            <button onClick={()=>setSideBarOpen(!sideBarOpen)} className="flex items-center justify-center rotate-90">
                                <Image width={30} height={30} alt="icon" src={"/arrow.png"}></Image>
                            </button>
                            </div>
                            {
                                /*Maps all topics to the subject and returns them. Subtopics are also getting mapped, but in the return statement*/
                                sideBarTopics.map((topic)=>{
                                    return (
                                    <>
                                    <div className="flex flex-row justify-between hover:bg-slate-300 rounded-md px-2 py-1">
                                        <div className="flex flex-row gap-1">
                                            <Image width={30} height={30} alt="icon" src={topic.icon != null?topic.icon:""}></Image>
                                            <button onClick={()=>scrollTo(topic.link)} className="h-10 text-left">{topic.name}</button>
                                        </div>
                                        <div className="flex items-center justify-self-end">
                                            <button onClick={()=>{topic.setOpen(!topic.open)}} className={`flex items-center ${topic.open?"rotate-180":"rotate-0"}`}>
                                                <Image  width={15} height={15} alt="icon" src={"/arrow.png"}></Image>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/*Check if subtopics should be shown */}
                                    <div className={`flex flex-col pl-6 ${topic.open?"block":"hidden"}`}>
                                    {
                                        /*Maps all Subtopics of Mastertopic */
                                        topic.subtopics?.map((subtopic)=>{
                                            
                                            return (
                                                <button onClick={()=>scrollTo(subtopic.link)} className=" p-2 rounded-md hover:bg-slate-300 text-left">{subtopic.name}</button>
                                            )

                                        })
                                    }
                                    </div>
                                    </>
                                    )  
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }

        </>

    )


}