import React from 'react';
import "./Footer.css"

const Footer = () => {
    const yaerNow = new Date().getFullYear();
    return (
        <footer>
            <p>Copywrite @ {yaerNow}</p>
        </footer>
    );
};

export default Footer;