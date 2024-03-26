import { Archivo_Narrow } from "next/font/google"



export default function Dominik(){


    const formular = "$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$"
    const testvektor = "$$ y = \\begin{bmatrix} 1 \\cr 1 \\cr 1 \\end{bmatrix}$$"

    return(
        <>

            <p className="text-center font-bold">Vektoren</p>
            <h1 className="underline font-bold">1. Einführung</h1>
            <br></br>
            <p>{formular}</p>
            <p>$$c^2 = a^2 + b^2$$</p>
            <p>{testvektor}</p>
            <section>
                <div className="grid lg:grid-cols-3 gap-12 mx-10 sm:grid-cols-1">
                    <div className="border text-center h-64 rounded-md shadow-lg">Betrag (Norm) eines Vektors</div>
                    <div className="border text-center h-64 rounded-md shadow-lg">Skarlarprodukt</div>
                    <div className="border text-center h-64 rounded-md shadow-lg">Vektorkreuzprodukt</div>


                </div>
            </section>
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>

        </>
    )
}