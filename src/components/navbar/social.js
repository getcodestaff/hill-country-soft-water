import React from "react"
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export const Social = () => {
  return (
    <div className="inline-block m-0 mt-2 md:flex text-white">
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.youtube.com/channel/UCweueUCQIa05jrevbAZSu4w"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size="30px" />
        </a>
      </div>
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size="30px" />
        </a>
      </div>
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size="30px" />
        </a>
      </div>
    </div>
  )
}
