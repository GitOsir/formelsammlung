

export const Header = (props:{title:string})=>{

    return(
        
        <h1 className="flex flex-row flex-nowrap items-center my-8">
            <span className="flex-grow ml-4 block border-t border-black" aria-hidden="true" role="presentation"></span>
            <div className="flex justify-center items-center">
                <span className="flex-none block mx-4 px-5 py-3 text-xl leading-none font-medium uppercase bg-black text-white">
                {props.title}
                </span>
                <div className="absolute size-20 bg-violet-400 blur-2xl -z-10 rounded-full"></div>
            </div>
            <span className="flex-grow mr-4 block border-t border-black" aria-hidden="true" role="presentation"></span>
        </h1>

    )
}