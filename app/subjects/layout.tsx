import Script from 'next/script'
import Navbar from '../ui/subjects/Navbar'
 
export default function SubjectsLayout({children,}: {children: React.ReactNode}) {
  return (
    <>
        <Script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" />


        <Navbar/>
        <section>{children}</section>
    </>
  )
}

