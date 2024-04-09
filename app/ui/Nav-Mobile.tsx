

import { subjects } from "../data/subjects"

export const Navbar_Mobile = ()=>{

    

    return(

        <footer className="fixed bottom-0 w-full bg-slate-300/25 border-t backdrop-filter backdrop-blur-md shadow-md">
            <div className="grid grid-cols-3 h-full items-center">
                <div className="flex flex-row justify-around">
                    <SubjectTab subjectIndex={0}/>
                    <SubjectTab subjectIndex={1}/>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="absolute bottom-8 size-14 rounded-full bg-slate-300 shadow-md"></div>
                        <div className="size-24 bg-violet-400 rounded-full absolute -z-10 blur-3xl"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-around items-center">
                    <SubjectTab subjectIndex={2}/>
                    <div className="flex flex-col items-center">
                        <button className="size-10 bg-slate-500 rounded-full"></button>
                        <p className="text-xs">More</p>    
                    </div>
                </div>

                
            </div>
        </footer>
    )

    
}

const SubjectTab = ({subjectIndex}:{subjectIndex:number})=>{
    return(
        <div className="flex flex-col items-center">
            <a href={subjects[subjectIndex].href} className="size-10 bg-slate-300 shadow-md rounded-full"></a>
            <p className="text-xs">{subjects[subjectIndex].name}</p>
        </div>
    )

}
