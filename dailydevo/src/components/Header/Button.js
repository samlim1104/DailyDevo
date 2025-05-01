// Filename - components/Header/Button.js
import React from 'react';

function Button({ label, onClick }) {
    const buttonStyle = {
        alignItems: 'center',
        display: 'flex',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.20)',
        background: '#FAFAFA',
        padding: '20px 20px',
        fontFamily: '"Kaisei Decol", serif',
        fontSize: '24px',
        cursor: 'pointer',
        outline: 'none',
        height: '20px',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;

