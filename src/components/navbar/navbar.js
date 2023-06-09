import React from "react"
import { Hamburger } from "./hamburger"
import { NavLinks } from "./navlinks.js"

export const Navbar = () => {
  return (
    <div>
      <Hamburger />
      <NavLinks styles={'hidden lg:flex flex-row font-sans font-light justify-center space-between px-3 pb-2 text-black text-2xl'} />
    </div>
  )
}
