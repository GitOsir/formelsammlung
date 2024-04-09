import { Header } from "../../Header"
import Card from "../Card"

export default function Funktionen(){
    const formula = "$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$"
    return(
        <>
        <section id="functions">
        <Header title="Funktionen"/>
        <section id="functionTypes">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <Card contents={
                <>
                <h1 className="font-bold text-center">Lineare Funktionen</h1>
                <p>{"$$\\operatorname{f}(x)=mx+n$$"}</p>
                </>
            }/>
            <Card contents={
                <>
                <h1 className="font-bold text-center">Quadratische Funktionen</h1>
                <p>{"$$\\operatorname{f}(x)=ax^2+bx+c$$"}</p>
                </>
            }/>
            <Card contents={
                <>
                <h1 className="font-bold text-center">Potenzfunktionen</h1>
                <p>{"$$\\operatorname{f}(x)=x^n$$"}</p>
                </>
            }/>
        </div>
        <div className="h-[100rem]"></div>

        </section>
        </section>
        </>
    )
}
