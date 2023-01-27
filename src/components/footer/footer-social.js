import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaPinterest
} from 'react-icons/fa';

import * as styles from './footer.module.css';

export const FooterSocial = () => {
    return (
        <div className="flex flex-wrap items-center justify-around flex-col mb-8 pr-8">
            <div className="flex self-stretch justify-around text-xl">
                <div className={styles.social_icon}>
                    <FaFacebook className="inline-block text-chsblue" />
                </div>
                <div className={styles.social_icon}>
                    <FaTwitter className="inline-block text-chsblue" />
                </div>
                <div className={styles.social_icon}>
                    <FaGoogle className="inline-block text-chsblue" />
                </div>
                <div className={styles.social_icon}>
                    <FaInstagram className="inline-block text-chsblue" />
                </div>
                <div className={styles.social_icon}>
                    <FaPinterest className="inline-block text-chsblue" />
                </div>
            </div>
        </div>
    );
};
