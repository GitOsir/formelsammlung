import Script from 'next/script'
import Navbar from '../ui/Navbar'
import { SideBar } from '../ui/SideBar' 

export default function SubjectsLayout({children,}: {children: React.ReactNode}) {
  return (
    <>

          <Script src="mathjax_config.js" defer></Script>
          <Script type="text/javascript" id="MathJax-script" defer
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
          </Script>


          <Navbar/>
          <div className='flex'>
            <SideBar/>
            <section>{children}</section>
          </div>


    </>
  )
}

