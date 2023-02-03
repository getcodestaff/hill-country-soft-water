import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterSocial } from './footer-social';
import { FooterAccordion } from './footer-accordion';
import { ServicesLinks } from './services-links';
import { ServiceAreas } from './service-areas';

export const MobileFooter = ({ location }) => {
    return (
        <div className="footer1 block md:hidden">
            <div className="container">
                <div className="container m-auto">
                    <FooterSocial />
                    <div className="text-white mb-8 mx-4">
                        <FooterAccordion>
                            <h4 className="footer-title">OUR SERVICES</h4>
                            <ServicesLinks />
                            <h4 className="footer-title">SERVICE AREAS</h4>
                            <ServiceAreas />
                            <h4 className="footer-title">CONTACT US</h4>
                        </FooterAccordion>
                    </div>
                </div>
            </div>

            <div className="">
                <Link className="text-center m-auto block pb-8" to="/">
                    <StaticImage
                        alt="logo"
                        src="../../images/layout/footer-logo_11_11zon.webp"
                        height={50}
                    />
                </Link>
            </div>
        </div>
    );
};
