"use client"

import {subjects} from "@/app/data/subjects"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlinks(){
    const pathname = usePathname();
    console.log("pathname: " + pathname);
    return(
        <div className="flex flex-row gap-6">
            
            {subjects.map((subject)=>(
            <a href={subject.href} className={clsx(
                'flex justify-center items-center bg-white w-28 h-9 rounded-md font-normal',
                {
                    'bg-slate-400 font-extrabold text-white':pathname === subject.href,
                },
                )}>
                <p className="font-normal">{subject.name}</p>
            </a>
            ))}

        </div>
    )

}