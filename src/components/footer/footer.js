import React from 'react';
import { Copyright } from './copyright';
import { DesktopFooter } from './desktop-footer';
import { MobileFooter } from './mobile-footer';
import * as styles from './footer.module.css';

export const Footer = ({ location }) => {
    return (
        <footer className={styles.footer_background}>
            <DesktopFooter />
            {/* <MobileFooter /> */}
            <Copyright />
        </footer>
    );
};
