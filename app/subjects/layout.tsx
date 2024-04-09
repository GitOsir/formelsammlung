"use client"

import Script from 'next/script'
import { Navbar_Desktop } from '../ui/Nav-Desktop'
import { SideBar } from '../ui/SideBar' 
import { useMediaQuery } from '../util/useMediaQuery'
import { Navbar_Mobile } from '../ui/Nav-Mobile';
import MathJax from "@/app/mathjax-config";

export default function SubjectsLayout({children,}: {children: React.ReactNode}) {

  const isMobile = useMediaQuery(768);

  return (
    <>
          <MathJax />
          <Script strategy="lazyOnload" src="@/mathjax-config.js" async></Script>





          {
          isMobile?(
            <div>
              <section>{children}</section>
              <Navbar_Mobile/>
            </div>
          ):(
          <>
            <Navbar_Desktop/>
            <div className='flex'>
              <SideBar/>
              <section>{children}</section>
            </div>
          </>
          )
          }


    </>
  )
}

