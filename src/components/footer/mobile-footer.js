import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterSocial } from './footer-social';
import { FooterAccordion } from './footer-accordion';
import { ServicesLinks } from './services-links';
import { FooterContacts } from './footer-contacts';
// import { PopularPages } from './popular-pages.js';
import { Copyright } from './copyright';

export const MobileFooter = ({ location }) => {
    return (
        <div className="footer1 mobile-toggle">
            <div className="container">
                <div className="container m-auto">
                    <FooterSocial />
                    <div className="text-white mb-16">
                        <FooterAccordion>
                            <h4 className="footer-title">OUR SERVICES</h4>
                            <ServicesLinks />
                            <h4 className="footer-title">SERVICE AREAS</h4>
                            <FooterContacts />
                            <h4 className="footer-title">CONTACT US</h4>
                            {/* <PopularPages
                                location={location}
                                classline="mt-2"
                            /> */}
                        </FooterAccordion>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link className="text-center m-auto block" to="/">
                    <StaticImage
                        alt="logo"
                        src="../../images/layout/footer-logo_11_11zon.webp"
                        height={50}
                    />
                </Link>
            </div>
            <Copyright />
        </div>
    );
};
