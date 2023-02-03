import { Link } from "gatsby"
import React from "react"
import { Angies } from "./angies"
import { Contractor } from "./contractor"
import { Elite } from "./elite"
import { TopRated } from "./top-rated"
import { Trex } from "./trex"

export const Badges = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-around md:p-16 mx-4">
        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
          <Angies />
        </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[16%]">
          <Link to="/">
          <Trex />
        </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[16%]">
          <Link to="/">
          <Contractor />
        </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
          <TopRated />
        </Link>
        </div>
        
        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
          <Elite />
        </Link>
        </div>
      </div>
    </div>
  )
}
