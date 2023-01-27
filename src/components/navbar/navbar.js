import React from "react"
import { MobileNavigation } from "./mobile-navigation"
import { NavLinks } from "./navlinks"

export const Navbar = () => {
  return (
    <div>
      <MobileNavigation />
      <NavLinks styles={'hidden md:flex flex-row font-sans font-light justify-center space-between px-3 pb-2 text-black text-2xl'} />
    </div>
  )
}
