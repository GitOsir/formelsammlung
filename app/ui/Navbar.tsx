"use client"

import { useMediaQuery } from "../util/useMediaQuery";
import { Navbar_Desktop } from "./Nav-Desktop";
import { Navbar_Mobile } from "./Nav-Mobile";


export default function Navbar(){

    const isMobile = useMediaQuery(768);

    return (
        <>
            {
            isMobile?(
              <Navbar_Mobile/>
            ):(
              <Navbar_Desktop/>
            )
            }

        </>
      );


}