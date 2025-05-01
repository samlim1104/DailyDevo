// Filename - Header.js
import React from 'react';
import Logo from './Logo.js'; 
import Button from './Button.js';

function Header() {
    const outerStyle = {
        width: '100%',
        backgroundColor: '#FAFAFA',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const innerStyle = {
        maxWidth: '1300px',        
        margin: '0 auto',         
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
        boxSizing: 'border-box',
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '30px',
    };

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
               <Logo />
                <div style={buttonGroupStyle}>
                    <Button label="home" to="/"/>
                    <Button label="about" to="/about" />
                    <Button label="login" to="/login" />
                    <Button label="signup" to="/signup"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
