

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";

export default function Navbar(){




    return (
        <>
          <div className="flex items-center w-full h-20 p-2 sticky top-0">
            <div className="w-full h-full bg-slate-900/70 rounded backdrop-filter backdrop-blur-md shadow-lg">

                <div className="mx-5 grid grid-cols-2 h-full">
                    <div className="flex items-center">
                    <Navlinks/>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="flex items-center text-white text-2xl font-bold bg-gray-500 px-3 py-1 rounded-s-md rounded-e-3xl">
                      <p className="hidden lg:block">FORMELSAMMLUNG</p>
                      <div className="bg-white h-6 w-6 ml-3 rounded-2xl"></div>
                      </div>
                    </div>
                </div>

            </div>
          </div>
        </>
      );


}