// Filename - Header.js
import React from 'react';
import Logo from './Logo.js'; 

function Header() {
    const headerStyle = {
        width: '100%',
        height: '60px',
        backgroundColor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={headerStyle}>
            <Logo />
        </div>
    );
}

export default Header;
