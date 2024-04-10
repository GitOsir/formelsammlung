import Card from "../Card"


export default function Funktionen(){
    const formula = "$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$"
    const pythagoras = "$$ a^2 + b^2 = c^2 $$"
    const höhe = "$$ h^2 = p * q $$"
    const kathete = "$$ b^2 = q * c $$"
    const sinus = "$$$$"
    return(
        <>
    
            
                <p className="font-bold text-center h-12 text-xl">Formeln</p>
                <p className="text-center font-bold underline font-">1. Satzgruppe des Pythagoras</p>
           
        
        <section>
            <div className="grid lg:grid-cols-3 gap-12 m-12 sm:grid-cols-1">
                <Card contents={

                <>
                    <h1 className="font-bold text-center h-8">Satz des Pythagoras</h1>
                    <p className="text-center">In jedem rechtwinkligen Dreieck ist das Hypothenusenquadrat flächengleich mit der Summe der Kathetenquadrate.</p>
                    <div className="flex justify-center">
                    
                        <p>{ pythagoras }</p>
                    
                    </div>
                </>
                

                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center h-8">Kathetensatz</h1>
                    <p className="text-center">In jedem rechtwinkligen Dreieck ist ein Kathetenquadrat flächengleich zu dem Rechteck aus Hypothenuse und zugehörigem Hypothenusenabschnitt.</p>
                    <div className="flex justify-center">
                        
                        <p >{ kathete }</p>
                        
                    </div>
                </>

                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center">Höhensatz</h1>
                    <p className="text-center">In jedem rechtwinkligen Dreieck ist das Quadrat über der Höhe flächengleich zu dem Rechteck aus den beiden Hypothenusenabschnitten.</p>
                    <div className="flex justify-center">
                        
                        <p >{ höhe }</p>
                        
                    </div>
                </>

                }/>
            </div>
        </section>

                    <p className="text-center font-bold underline font-">1. Trigonometrische Beziehungen in Dreiecken.</p>    

                    <section>
            <div className="grid lg:grid-cols-3 gap-12 m-12 sm:grid-cols-1">
                <Card contents={

                <>
                    <h1 className="font-bold text-center h-8">Sinussatz</h1>
                    <p className="text-center">In jedem Dreieck verhalten sich die Längen zweier Seiten wie die Sinuswerte der gegenüberliegenden Winkel.</p>
                    <div className="flex justify-center">
                    
                        <p>{  }</p>
                    
                    </div>
                </>
                

                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center h-8">Kosinussatz</h1>
                    <p className="text-center">In jedem Dreieck ist das Quadrat einer Seitenlänge gleich der Summe der Quadrate der beiden anderen Seitenlängen vermindert um das doppelte Produkt aus diesen beiden Seitenlängen und dem Kosinus des von ihnen eingeschlossenen Winkels.</p>
                    <div className="flex justify-center">
                        
                        <p >{  }</p>
                        
                    </div>
                </>

                }/>
                <Card contents={

                <>
                    <h1 className="font-bold text-center"></h1>
                    <p className="text-center"></p>
                    <div className="flex justify-center">
                        
                        <p >{  }</p>
                        
                    </div>
                </>

                }/>
            </div>
        </section>
        </>
    )
}
