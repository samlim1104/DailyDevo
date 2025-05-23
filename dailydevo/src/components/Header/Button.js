// Filename - components/Header/Button.js
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ label, to, onClick }) {
    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.20)',
        background: '#FAFAFA',
        padding: '20px 20px',
        fontFamily: '"Kaisei Decol", serif',
        fontSize: '24px',
        cursor: 'pointer',
        outline: 'none',
        height: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
    };

    if (to) {
        return (
          <Link to={to} style={buttonStyle}>
            {label}
          </Link>
        );
    }

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;

