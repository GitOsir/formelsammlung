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
                'flex justify-center items-center px-3 h-9 rounded-md',
                {
                    'bg-gray-500 font-normal text-white/75':pathname !== subject.href,
                    [`${subject.color}  font-extrabold text-white`]:pathname === subject.href,
                },
                )}>
                <p className="font-normal">{subject.name}</p>
            </a>
            ))}

        </div>
    )

}