import Card from "../Card"


export default function Funktionen(){
    const formula = "$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$"
    const pythagoras = "$$ a^2 + b^2 = c^2 $$"
    const halb = "$$ c = \\sqrt[2]{a^2 + b^2} $$"
    return(
        <>
    
        <h1>mathedingens</h1>
        <p>{formula}</p>
        <section>
            <div className="grid lg:grid-cols-3 gap-12 m-12 sm:grid-cols-1">
                <Card contents={

                <>
                    <h1 className="font-bold text-center">formeln und so</h1>
                    <p>Was ist eine Formel?</p>
                </>
                
                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center">andere Formeln</h1>
                    <p>Das ist eine Formel</p>
                    <div className="flex justify-center">
                        
                        <p >{ pythagoras }</p>
                        
                    </div>
                </>

                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center">andere Formeln</h1>
                    <p>das ist keine formel</p>
                    <div className="flex justify-center">
                        
                        <p >{ halb }</p>
                        
                    </div>
                </>

                }/>
            </div>
        </section>
        </>
    )
}
