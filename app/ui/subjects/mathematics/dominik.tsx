import { Archivo_Narrow } from "next/font/google"



export default function Dominik(){


    const vector_variable = "$$ y = \\begin{bmatrix} x \\cr y \\cr z \\end{bmatrix} \\longrightarrow$$"
    const vector_numbers = "$$\\begin{bmatrix} 1 \\cr 1 \\cr 1 \\end{bmatrix}$$"

    return(
        <>

            <p className="text-center font-bold">Vektoren</p>
            <h1 className="underline font-bold">1. Einführung</h1>
            <br></br>
            <p>$$c^2 = a^2 + b^2$$</p>
            <section>  
            <div className="border text-center h-64 rounded-md shadow-lg my-10 mx-10 p-5">
                        <p>{vector_variable} {vector_numbers}</p>
            </div>
                <div className="grid lg:grid-cols-3 gap-12 mx-10 sm:grid-cols-1">
                    <div className="border text-center h-64 rounded-md shadow-lg m">Betrag (Norm) eines Vektors</div>
                    <div className="border text-center h-64 rounded-md shadow-lg">Skarlarprodukt</div>
                    <div className="border text-center h-64 rounded-md shadow-lg">Vektorkreuzprodukt</div>
                </div>
            </section>
            <div className="h-96"></div>

        </>
    )
}