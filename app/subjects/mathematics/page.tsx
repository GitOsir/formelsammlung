import Vektoren from "@/app/ui/subjects/mathematics/Vektoren";
import Card from "@/app/ui/subjects/Card";
import { Metadata } from "next";
import Script from "next/script";
import Funktionen from "@/app/ui/subjects/mathematics/Funktionen";
import Geometrie from "@/app/ui/subjects/mathematics/Geometrie";


export const metadata: Metadata = {
    title: "Mathematik",
  };
  

export default function mathematics(){
    
    return(
        <>
            <Funktionen/>
            <Vektoren/>
            <Geometrie/>
        </>

    )
}