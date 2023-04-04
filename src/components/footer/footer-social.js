import React, { useContext } from "react"
import { FooterContext } from "../../contexts/footer-context"
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaApple,
} from "react-icons/fa"

import * as styles from "./footer.module.css"

export const FooterSocial = () => {
  const { footer } = useContext(FooterContext)

  const socials = footer.data.social.toLowerCase()
  const isInUse = item => socials.includes(item)

  return (
    <div id='footer-social' className="flex flex-wrap items-center justify-around flex-col mb-8 pl-2 pr-8">
      <div className="flex self-stretch justify-around text-xl">
        {isInUse("facebook") ? (
          <div className={styles.social_icon}>
            <a href="https://www.facebook.com/">
            <FaFacebook className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
        {isInUse("twitter") ? (
          <div className={styles.social_icon}>
            <a href="https://twitter.com/">
            <FaTwitter className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
        {isInUse("google") ? (
          <div className={styles.social_icon}>
            <a href="#footer-social">
            <FaGoogle className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("instagram") ? (
          <div className={styles.social_icon}>
            <a href="https://instagram.com/">
            <FaInstagram className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("pinterest") ? (
          <div className={styles.social_icon}>
            <a href="https://www.facebook.com/">
            <FaPinterest className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("apple") ? (
          <div className={styles.social_icon}>
            <a href="#footer-social">
              <FaApple className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}
