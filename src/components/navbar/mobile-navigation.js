import React, { useState } from "react"
import { NavLinks } from "./navlinks"
import { CgMenu } from "react-icons/cg"
import { CgClose } from "react-icons/cg"

const styles = "md:hidden font-sans font-light"

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <CgMenu
      onClick={() => setOpen(!open)}
      size="40px"
      className="absolute right-3 top-3 cursor-pointer"
    />
  )
  
  const closeIcon = (
    <CgClose
      onClick={() => setOpen(!open)}
      size="40px"
      className="absolute top-3 right-3"
    />
  )
  return (
    <nav className={styles} >
      {open ? closeIcon : hamburgerIcon}
      {open && 
            <NavLinks mobile styles="block absolute right-35 bg-chsltblue border-2 border-orange-500 p-2 leading-8 z-50 text-xl mt-6" />
        }
    </nav>
  )
}
