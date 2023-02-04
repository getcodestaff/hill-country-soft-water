import { Link } from "gatsby"
import React from "react"
import { Badge1 } from "./badge1"
import { Badge2 } from "./badge2"
import { Badge3 } from "./badge3"
import { Badge4 } from "./badge4"
import { Badge5 } from "./badge5"

export const Badges = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-around md:p-16 mx-4">
        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
            <Badge1 />
          </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[16%]">
          <Link to="/">
            <Badge2 />
          </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[16%]">
          <Link to="/">
            <Badge3 />
          </Link>
        </div>

        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
            <Badge4 />
          </Link>
        </div>
{/* 
        <div className="flex justify-around my-4 md:flex-none md:w-[8%]">
          <Link to="/">
            <Badge5 />
          </Link>
        </div> */}
      </div>
    </div>
  )
}
