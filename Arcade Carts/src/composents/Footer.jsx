import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Footer = () => {
    return (
        <div>
            <footer>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </footer>
        </div>
    );
};

export default Footer;