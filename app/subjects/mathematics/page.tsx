import Vektoren from "@/app/ui/subjects/mathematics/Vektoren";
import Card from "@/app/ui/subjects/Card";
import { Metadata } from "next";
import Script from "next/script";
import Funktionen from "@/app/ui/subjects/mathematics/Funktionen";

export const metadata: Metadata = {
    title: "Mathematik",
  };
  

export default function mathematics(){

    return(
        <>

            <div className="grid grid-cols-3">
                <Card contents={
                    <>
                        <h1 className="text-center font-bold">Pythagoras</h1>
                        <p className="font-normal">mit dem Satz des Pythagoras lassen sich die Seitenlängen eines rechtwinkligen Dreicecks berechnen.</p>
                        <div className="flex justify-center">
                            <p>{"$$a^2+b^2=c^2$$"}</p>
                        </div>
                    </>
                }/>
                <Card/>
                <Card/>
            </div>
            
            <Funktionen/>
            <Vektoren/>
        </>

    )
}