import React from 'react';
import SocialMediaResourceLists from '../socialMedia/socialMedia-list';


const Footer = () => {
    return (
        <div className="footer-page">
            <div className="footer-row">
                <div className="footer-row-column">
                    <SocialMediaResourceLists />
                </div>
                <div className="copy-right-row">
                    Copyright 2017 by Johnny Cheng
                </div>
            </div>
        </div>
    );
}

export default Footer