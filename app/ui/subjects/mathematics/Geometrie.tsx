
import Card from "../Card"

export default function Geometrie(){

    return(
        <>
        <section id="geometry">
        <h1 className="text-center font-bold text-4xl">Geometrie</h1>
        <p className="text-center text-2xl m-5">Flächen</p>
        <div className="grid grid-cols-3">
            <Card contents={
                <>
                <h1 className="text-center font-bold">Quadrat</h1>
                <p>hallo {"$ax^2 + bx + c = 0$"}</p>
                </>
            }/>
            <Card contents={
                <>
                <h1 className="text-center font-bold">Rechteck</h1>
                </>
            }/>
            <Card contents={
                <>
                <h1 className="text-center font-bold">Quadrat</h1>
                </>
            }/>


        </div>

        
        </section>
        </>
    )

    
}