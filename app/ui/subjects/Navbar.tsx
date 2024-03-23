"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import clsx from 'clsx';

export default function Navbar(){
    const pathname = usePathname();




    return (
        <>
          <div className="flex items-center w-full h-20 p-2 sticky top-0">
            <div className="w-full h-full bg-gray-500/30 rounded backdrop-filter backdrop-blur-md shadow-lg">

                <div className="mx-5 grid grid-cols-2 h-full">
                    <div className="flex items-center">
                    <Navlinks/>
                    </div>
                    <div className="flex items-center justify-end">
                    <p className="text-white text-2xl font-bold">FORMELSAMMLUNG</p>
                    </div>
                </div>

            </div>
          </div>
        </>
      );


}