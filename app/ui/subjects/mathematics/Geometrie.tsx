
import Card from "../Card"
import { Header } from "../../Header"

export default function Geometrie(){

    return(
        <>
        <section id="geometry">
        <Header title="Geometrie"/>
        <p className="text-center text-2xl m-5 font-bold">Flächen</p>
        <div className="grid grid-cols-3">
            <Card contents={
                <>
                <h1 className="text-center font-bold">Quadrat</h1>
                <p>{"$ax^2 + bx + c = 0$"}</p>
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