


export default function Vektoren(){

    
    const formular = "$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$"

    return(
        <>
        <section id="vectors">
            <p>Dominik ... npm run dev</p>
            <h1 className="text-center font-bold hover:font-thin">Das ist der erste Test von mir</h1>
            <h2>Überschrift nummer 2</h2>
            <p>$$c^2 = a^2 + b^2$$</p>
            <p>{formular}</p>
            <section>
                <div className="grid lg:grid-cols-3 gap-12 mx-10 sm:grid-cols-1">
                    <div className="border text-center h-32 rounded-md shadow-md">Dingens</div>
                    <div className="border text-center h-32 rounded-md">dingens 2</div>
                    <div className="border text-center h-32 rounded-md">dingens 3</div>


                </div>
            </section>
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>
        </section>
        </>
    )
}