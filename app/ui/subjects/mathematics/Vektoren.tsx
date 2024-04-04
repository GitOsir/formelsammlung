import { Archivo_Narrow } from "next/font/google"
import Card from "../Card"


export default function Vektoren(){


    const vector_variable = "$$ y = \\begin{bmatrix} x \\cr y \\cr z \\end{bmatrix} \\longrightarrow \\begin{bmatrix} 1 \\cr 2 \\cr 3 \\end{bmatrix}$$"
    const vector_n = "$$ \\vec{n}$$"

    return(
        <>

            <p className="text-center font-bold">Vektoren</p>
            <h1 className="underline font-bold p-9">1. Einführung</h1>
            <section>  
                    <Card contents={
                        <>
                            <p>{vector_variable}</p>
                            <p>Dargestellt ist ein Punkt in einem dreimensionalen Koordinatensystem. Der Punkt hat auf der x-Achse die Koordinate 1, auf der y-Achse die Koordinate 2 und auf der z-Achse die Koordinate 3.</p>
                        </>
                    }/>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Betrag (Norm) eines Vektors</h1>
                            <p>Gibt die Länge eines Vekotrs an</p>

                        </>
                    }/>
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Skarlarprodukt</h1>
                            <p>Damit wird geprüft, ob zwei Vektoren senkrecht zueinander stehen.</p>

                        </>
                    }/>
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Vektorkreuzprodukt</h1>
                            <p>Bildet den senkrechten Vektor ({vector_n}), an dem die beiden ausgehenden Vektoren senkrecht zueinander stehen. </p>

                        </>
                    }/>
                </div>
            </section>
            <div className="h-96"></div>

        </>
    )
}