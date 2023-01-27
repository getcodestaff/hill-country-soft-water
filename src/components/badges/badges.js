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
      <div className="flex justify-around p-16 mx-4">
        <Link className="w-[8%]" to="/">
          <Angies />
        </Link>
        <Link className="w-[16%]" to="/">
          <Trex />
        </Link>
        <Link className="w-[16%]" to="/">
          <Contractor />
        </Link>
        <Link className="w-[8%]" to="/">
          <TopRated />
        </Link>
        <Link className="w-[8%]" to="/">
          <Elite />
        </Link>
      </div>
    </div>
  )
}
