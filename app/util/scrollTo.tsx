

export const scrollTo = (id:string)=>{
    const element = document.getElementById(id);
    const NavbarDesktop = document.getElementById("navbarDesktop");

    const y = element?.getBoundingClientRect().top + window.scrollY - NavbarDesktop?.getBoundingClientRect().height;
    console.log("y:" + y)
    window.scrollTo({top:y, behavior: "smooth"});
}