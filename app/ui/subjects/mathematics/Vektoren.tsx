import { Archivo_Narrow } from "next/font/google"
import Card from "../Card"


export default function Vektoren(){

    
    const arrow_right = "$\\rightarrow$"
    
    const CAS_norm_0A = "$$norm(\\begin{pmatrix} 3 \\cr 2 \\cr 6 \\end{pmatrix}) = 7 \\space LE$$"
    const vector_variable_0A = "$$\\vec{0A} = \\begin{pmatrix} x \\cr y \\cr z \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 3 \\cr 2 \\cr 6 \\end{pmatrix}$$"
    const math2_Element = "$\\begin{bmatrix} \\blacksquare \\cr \\square \\end{bmatrix}$"
    const vector_norm_0A = "$$|\\vec{0A}| = |\\begin{pmatrix} 3 \\cr 2 \\cr 6 \\end{pmatrix}|$$"
    const norm_berechnung_0A = "$$\\rightarrow \\sqrt{x^2+y^2+z^2} = \\sqrt{3^2+2^2+6^2} = 7 \\space LE$$"

    const CAS_norm_BC = "$$norm(\\begin{pmatrix} 3 \\cr 2 \\cr 6 \\end{pmatrix}) \\thickapprox 7 \\space LE$$"
    const vector_variable_0B_0C = "$$\\vec{0B} = \\begin{pmatrix} 4,25 \\cr 6 \\cr 2,05 \\end{pmatrix} ; \\space \\space \\vec{0C} = \\begin{pmatrix} 8,75 \\cr 1 \\cr 4 \\end{pmatrix} \\longrightarrow \\space \\space \\vec{BC} = \\begin{pmatrix} 4,5 \\cr -5 \\cr 1,95 \\end{pmatrix}$$"
    const vector_norm_BC = "$$|\\vec{BC}| = |\\begin{pmatrix} 4,5 \\cr -5 \\cr 1,95 \\end{pmatrix}|$$"
    const norm_berechnung_BC = "$$\\sqrt{x^2+y^2+z^2} = \\sqrt{4,5^2-5^2+1,95^2} \\thickapprox 7 \\space LE$$"

    const vector_variable_0D = "$\\vec{0D} = \\begin{pmatrix} -1 \\cr 3 \\cr -4 \\end{pmatrix}$"
    const vector_variable_0E = "$\\vec{0E} = \\begin{pmatrix} -2 \\cr 2 \\cr 2 \\end{pmatrix}$"
    const CAS_skarlar_DE = "$$dotP(\\begin{pmatrix} -1 \\cr 3 \\cr -4 \\end{pmatrix} , \\begin{pmatrix} -2 \\cr 2 \\cr 2 \\end{pmatrix})$$"
    const dotP_DE = "$$\\begin{pmatrix} -1 \\cr 3 \\cr -4 \\end{pmatrix} \\bullet \\begin{pmatrix} -2 \\cr 2 \\cr 2 \\end{pmatrix}$$"
    const dotP_DE_ausgeschrieben = "$$(-1 \\cdot (-2))+(3 \\cdot 2)+((-4)\\cdot 2) \\rightarrow 2 + 6 - 8 = 0$$"

    const vector_variable_0F = "$\\vec{0F} = \\begin{pmatrix} 4 \\cr -2 \\cr 5 \\end{pmatrix}$"
    const CAS_crossP_DF = "$$crossP(\\begin{pmatrix} -1 \\cr 3 \\cr -4 \\end{pmatrix} , \\begin{pmatrix} 4 \\cr -2 \\cr 5 \\end{pmatrix})$$"
    const crossP_DF = "$$\\begin{pmatrix} -1 \\cr 3 \\cr -4 \\end{pmatrix} \\times \\begin{pmatrix} 4 \\cr -2 \\cr 5 \\end{pmatrix}$$"
    const crossP_DF_ausgeschrieben = "$$\\begin{pmatrix} (3 \\cdot 5) - ((-4) \\cdot (-2)) \\cr ((-4) \\cdot 4) - ((-1) \\cdot 5) \\cr ((-1) \\cdot (-2)) - (3 \\cdot 4)\\end{pmatrix}  = \\begin{pmatrix} 7 \\cr -11 \\cr -10 \\end{pmatrix} = \\vec{n}$$"

    const vector_variable_0G = "$\\vec{0G} = \\begin{pmatrix} 0 \\cr 0 \\cr 1 \\end{pmatrix}$"
    const vector_variable_0H = "$\\vec{0H} = \\begin{pmatrix} 1 \\cr 1 \\cr 1 \\end{pmatrix}$"
    const CAS_angle_GH = "$$angle(\\begin{pmatrix} 0 \\cr 0 \\cr 1 \\end{pmatrix} , \\begin{pmatrix} 1 \\cr 1 \\cr 1 \\end{pmatrix})$$"
    const angle_GH = "$$angle(\\begin{pmatrix} 0 \\cr 0 \\cr 1 \\end{pmatrix} , \\begin{pmatrix} 1 \\cr 1 \\cr 1 \\end{pmatrix}) = 54,7° \\thickapprox 55°$$"

    const vector_n = "$\\vec{n}$"
    const vector_0D = "$\\vec{0D}$"
    const vector_0F = "$\\vec{0F}$"


    return(
        <>
        <section id="vectors">
            <p>Dominik ... npm run dev</p>
            <h1 className="text-center font-bold hover:font-thin">Das ist der erste Test von mir</h1>
            <h2>Überschrift nummer 2</h2>

            <p className="text-center font-bold">Vektoren</p>
            <h1 className="underline font-bold p-9">1. Einführung</h1>
            <section>  
                    <Card contents={
                        <>
                            <p className="-z-30">{vector_variable_0A}</p>
                            <p>Dargestellt ist ein Ortsvektor in einem dreimensionalen Koordinatensystem. Der Ortsverktor hat auf der <b>x-Achse</b> die Koordinate 3, auf der <b>y-Achse</b> die Koordinate 2 und auf der <b>z-Achse</b> die Koordinate 6.</p>
                            <br></br>
                            <p className="-z-30">{arrow_right} In <b>Keyboard</b> unter <b>Math2</b> ist das Element {math2_Element} verfügbar. Durch einmaliges Anklicken erhält man einen 2 dimensionalen Vektor und bei erneutem Anklicken erhöht sich die Dimension um 1. So lassen sich im ClassPad Ortsvektoren definieren und damit rechnen.</p>
                        </>
                    }/>

            </section>
            <section className="mt-8"> 
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Betrag (Norm) eines Vektors</h1>
                            <br></br>
                            <p>Gibt die Länge einer Strecke an. Der dazugehörige Taschenrechner (CAS) Ablauf lautet wie folgt:</p> 
                            <b><p className="-z-10">Man geht zu Main {arrow_right} Aktion {arrow_right} Vektor {arrow_right} norm</p></b>
                            <p className="-z-30">{CAS_norm_0A}</p>
                            <br></br>   
                            <p>Um das ganze auf dem Blatt zu veranschaulichen wird jeweils ein Betragsstrich vor und hinter dem Vektor gezogen: </p> 
                            <p className="-z-30">{vector_norm_0A}</p>
                            <p>Um nun den Betrag des Vektors auszurechnen setzt man den Vektor erst einmal in die Wurzel, quaddriert jeweils x, y, z und addirt diese Ergebnisse  zusammen, um danach die Wurzel daraus zu ziehen:</p>
                            <p className="-z-30">{norm_berechnung_0A}</p>
                            <p>Und da keine definierte Einheit gegeben ist wird das Ergebnis in Längeneinheiten (LE) angegeben.</p>
                        </>
                    }/>
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Betrag (Norm) einer Strecke</h1>
                            <br></br>
                            <p>Gibt die Länge einer Strecke an. Der dazugehörige Taschenrechner (CAS) Ablauf lautet wie folgt:</p> 
                            <b><p className="-z-30">Man geht zu Main {arrow_right} Aktion {arrow_right} Vektor {arrow_right} norm</p></b>
                            <p className="-z-30">{CAS_norm_BC}</p>
                            <br></br>  
                            <p>Um aus diesen beiden Vektoren nun die Strecke zu bilden zieht man den zweiten Vektor von dem ersten Vektor ab:</p>  
                            <p className="-z-30">{vector_variable_0B_0C}</p>
                            <p>Um das ganze auf dem Blatt zu veranschaulichen wird wieder jeweils ein Betragsstrich vor und hinter dem Vektor gezogen: </p> 
                            <p className="-z-30">{vector_norm_BC}</p>
                            <p>Um nun den Betrag des Vektors auszurechnen setzt man den Vektor erst einmal in die Wurzel, quaddriert jeweils x, y, z und addirt diese Ergebnisse  zusammen, um danach die Wurzel daraus zu ziehen:</p>
                            <p className="-z-30">{norm_berechnung_BC}</p>
                            <p>Und da keine definierte Einheit gegeben ist wird das Ergebnis in Längeneinheiten (LE) angegeben.</p>
                        </>
                    }/>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                <Card contents={
                        <>
                            <h1 className="text-center font-bold">Skarlarprodukt</h1>
                            <br></br>
                            <p className="-z-30">{vector_variable_0D} ; {vector_variable_0E}</p>
                            <p>Damit wird geprüft, ob zwei Vektoren senkrecht zueinander stehen. Ist das Skarlaprodukt 0, dann sind die Vektoren senkrecht!</p>
                            <p>Der dazugehörige Taschenrechner (CAS) Ablauf lautet wie folgt:</p>
                            <b><p className="-z-30">Man geht zu Main {arrow_right} Aktion {arrow_right} Vektor {arrow_right} dotP</p></b>
                            <p className="-z-30">{CAS_skarlar_DE}</p>
                            <p>Um das ganze auf dem Blatt zu veranschaulichen wird zwischen den Vektoren ein dicker Punkt gesetzt: </p> 
                            <p className="-z-30">{dotP_DE}</p>
                            <p>Um nun das Skarlarprodukt der Vektoren zu erhalten multipliziert man jeweils die x-Werte, y-Werte und die z-Werte miteinander und addiert alles am Ende zusammen:</p>
                            <p className="-z-30">{dotP_DE_ausgeschrieben}</p>
                            <p>Da das Ergebnis vom Skarlarprodukt Null ergibt stehen die beiden Vektoren senkrecht zueinander.</p>
                        </>
                    }/>
                    <Card contents={
                        <>
                            <h1 className="text-center font-bold">Vektorkreuzprodukt</h1>
                            <br></br>
                            <p className="-z-30">{vector_variable_0D} ; {vector_variable_0F}</p>
                            <p className="-z-30">Bildet den senkrechten Vektor oder auch der Normalevektor ({vector_n}) genannt, welcher senkrecht auf beiden Vektoren steht.</p>
                            <p>Der dazugehörige Taschenrechner (CAS) Ablauf lautet wie folgt:</p>
                            <b><p className="-z-30">Man geht zu Main {arrow_right} Aktion {arrow_right} Vektor {arrow_right} crossP</p></b>
                            <p className="-z-30">{CAS_crossP_DF}</p>
                            <p>Um das ganze auf dem Blatt zu veranschaulichen wird zwischen den Vektoren ein dicker Punkt gesetzt: </p> 
                            <p className="-z-30">{crossP_DF}</p>
                            <p>Um nun den senkrechten Vektor der beiden ausgehenden Vektorn zu erhaltenfängt man auf der linken Seite bei der y-Koordinate an und multipliziert diese Zahl mit der z-Koordinate des zweiten Vektors und subtrahiert diese Zahl mit dem Ergebnis aus der z-Koordinate des ersten Vektors multipliziert mit der y-Koordinate des zweiten Vektors. Danach wird die z-Koordinate des ersten Vektor multipliziert mit der x-Koordinate des zweiten Vektors und dementsprechend subtrahiert mit dem Ergebnis aus der x-Koordinate des ersten Vektors und der z-Koordinate des zweiten Vektors... :</p>
                            <p className="-z-30">{crossP_DF_ausgeschrieben}</p>
                            <p>Dieser Vektor ist der senkrechte Vektor zu den Vektoren {vector_0D} und {vector_0F}.</p>

                        </>
                    }/>
                <Card contents={
                        <>
                            <h1 className="text-center font-bold">Winkel zwischen Vektoren</h1>
                            <br></br>
                            <p className="-z-30">{vector_variable_0G} ; {vector_variable_0H}</p>
                            <p>Errechnet den Winkel zwischen zwei Vektoren</p>
                            <p>Der dazugehörige Taschenrechner (CAS) Ablauf lautet wie folgt:</p>
                            <b><p className="-z-30">Man geht zu Main {arrow_right} Aktion {arrow_right} Vektor {arrow_right} angle</p></b>
                            <p className="-z-30">{CAS_angle_GH}</p>
                            <p>Den Winkel kann man nur mit dem Taschenrechner ausrechnen und deshlab kann man, wenn man es möchte, den Taschenrechner Befehl auf sein Blatt schreiben und dahinter die Gradzahl des Winkels:</p> 
                            <p className="-z-30">{angle_GH}</p>
                        </>
                    }/>
                </div>
            </section>
            </section>
        </>
    )
}