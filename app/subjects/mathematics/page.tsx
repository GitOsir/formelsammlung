import Johan from "@/app/ui/subjects/mathematics/johan";
import Dominik from "@/app/ui/subjects/mathematics/dominik";
import ModuleTest from "@/app/ui/subjects/mathematics/test";
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