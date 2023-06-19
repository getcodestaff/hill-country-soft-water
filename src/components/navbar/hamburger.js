import React, { useState, useContext } from "react"
import { CgMenu, CgClose } from "react-icons/cg"
// import { CgClose } from "react-icons/cg"
import { MenuContext } from "../../contexts/menu-context"

const styles = "lg:hidden font-sans font-light justify-between"

export const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const { menuOpen, setMenuOpen } = useContext(MenuContext)

  const toggleHamburger = () => {
    setMenuOpen(!open)
    setOpen(!open)
  }

  const hamburgerIcon = (
    <CgMenu
      onClick={toggleHamburger}
      size="40px"
      className="absolute right-3 top-3 cursor-pointer"
    />
  )

  const closeIcon = (
    <CgClose
      onClick={toggleHamburger}
      size="40px"
      className="absolute top-3 right-3"
    />
  )
  return <nav className={styles}>{open ? closeIcon : hamburgerIcon}</nav>
}
