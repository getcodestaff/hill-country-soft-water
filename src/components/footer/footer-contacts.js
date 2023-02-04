import React, { useContext } from 'react';
import { LayoutContext } from '../../contexts/layout-context';

export const FooterContacts = () => {
    const { layout } = useContext(LayoutContext);
    return (
        <div>
            <div className="whitespace-nowrap mt-2 font-bold text-chsblue">{layout.siteMetadata.addressName}</div>
            <div className="whitespace-nowrap mt-2">{layout.siteMetadata.addressLine1}</div>
            <div className="whitespace-nowrap mt-2">
            {layout.siteMetadata.addressCsz}
                <div className="whitespace-nowrap mt-2 font-semibold">{layout.siteMetadata.phone}</div>
                <div className="whitespace-nowrap mt-2 font-semibold">{layout.siteMetadata.email}</div>
            </div>
        </div>
    );
};
