
import Navlinks from "./Navlinks"

export const Navbar_Desktop = ()=>{
    return(
        <div id="navbarDesktop" className="flex items-center w-full h-16 sticky top-0 z-50">
            <div className="w-full h-full bg-slate-300/25 backdrop-filter backdrop-blur-md shadow-md border-b">

                <div className="mx-5 grid grid-cols-2 h-full">
                    <div className="flex items-center">
                    <Navlinks/>
                    </div>
                    <div className="flex items-center justify-end">
                    <div className="flex items-center text-white text-2xl font-bold bg-slate-300 shadow-md px-3 py-1 rounded-s-md rounded-e-3xl">
                    <p className="hidden lg:block">FORMELSAMMLUNG</p>
                    <div className="bg-white h-6 w-6 ml-3 rounded-2xl"></div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )

    
}