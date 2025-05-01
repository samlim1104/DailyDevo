// Filename - components/Header/Logo.js
import React from 'react';

function Logo() {
    const logoStyle = {
        color: '#000',
        textAlign: 'right',
        fontFamily: '"Kaisei Decol", serif',
        fontSize: '32px',
        paddingRight: '20px', // Optional: adds some spacing from the right edge
    };

    return (
        <div style={logoStyle}>
            dailydevo
        </div>
    );
}

export default Logo;
