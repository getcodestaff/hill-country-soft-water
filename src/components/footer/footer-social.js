import React, { useContext } from "react"
import { FooterContext } from "../../contexts/footer-context"
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa"

import * as styles from "./footer.module.css"

export const FooterSocial = () => {
  const { footer } = useContext(FooterContext)

  const socials = footer.data.social.toLowerCase()
  const isInUse = item => socials.includes(item)

  return (
    <div className="flex flex-wrap items-center justify-around flex-col mb-8 pl-2 pr-8">
      <div className="flex self-stretch justify-around text-xl">
        {isInUse("facebook") ? (
          <div className={styles.social_icon}>
            <FaFacebook className="inline-block text-chsblue" />
          </div>
        ) : null}
        {isInUse("twitter") ? (
          <div className={styles.social_icon}>
            <FaTwitter className="inline-block text-chsblue" />
          </div>
        ) : null}
        {isInUse("google") ? (
          <div className={styles.social_icon}>
            <FaGoogle className="inline-block text-chsblue" />
          </div>
        ) : null}

        {isInUse("instagram") ? (
          <div className={styles.social_icon}>
            <FaInstagram className="inline-block text-chsblue" />
          </div>
        ) : null}

        {isInUse("pinterest") ? (
          <div className={styles.social_icon}>
            <FaPinterest className="inline-block text-chsblue" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
