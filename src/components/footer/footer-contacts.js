import React, { useContext } from 'react';
import { LayoutContext } from '../../contexts/layout-context';

export const FooterContacts = () => {
    const { layout } = useContext(LayoutContext);
    const phone = layout.siteMetadata.phone
console.log('layout.siteMetadata: ', layout.siteMetadata)
    return (
        <div>
            <div className="whitespace-nowrap mt-2 font-bold text-chsblue">{layout.siteMetadata.addressName}</div>
            <div className="whitespace-nowrap mt-2">7812 Pomeroy Way</div>
            <div className="whitespace-nowrap mt-2">
                Citrus Heights, CA 95610
                <div className="whitespace-nowrap mt-2 font-semibold">{layout.siteMetadata.phone}</div>
                <div className="whitespace-nowrap mt-2 font-semibold">carruthhomesolutions2016@gmail.com</div>
            </div>
        </div>
    );
};
