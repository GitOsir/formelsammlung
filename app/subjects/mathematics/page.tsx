import Johan from "@/app/ui/subjects/mathematics/johan";
import Dominik from "@/app/ui/subjects/mathematics/dominik";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Mathematik",
  };
  

export default function mathematics(){

    return(
        <>
                  
            <Johan/>
            <Dominik/>
        </>

    )
}