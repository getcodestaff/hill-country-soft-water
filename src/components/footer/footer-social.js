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
    <div className="flex flex-wrap items-center justify-around flex-col mb-8 pl-2 pr-8">
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
            <a href="https://www.google.com/maps/place/Carruth+Home+Solutions,+7812+Pomeroy+Way,+Citrus+Heights,+CA+95610/@38.6931618,-121.2754895,13z/data=!4m6!3m5!1s0x809adf1616fb9d8d:0x61e6d7a1ef1b71be!8m2!3d38.6931618!4d-121.2754895!16s%2Fg%2F11qwgbfxyj">
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
            {/* carruth home solutions  */}
            <a href="https://maps.apple.com/?address=7812%20Pomeroy%20Way,%20Citrus%20Heights,%20CA%20%2095610,%20United%20States&auid=4658356625366678561&ll=38.693148,-121.275435&lsp=9902&q=Carruth%20Home%20Solutions&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCwAQoECAoQAAoECFIQBAoECFUQAAoECFkQBgoFCKQBEAESJikYusjkJVhDQDHn5RkD/1FewDmWj+5ATFlDQEFXsCRxQlFewFAE&t=m">
              <FaApple className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}
