import React from 'react';

function Page({ children, style = {}, color = '#FAFAFA', width = '750px', height = '700px' }) {
    const pageStyle = {
        borderRadius: '20px',
        background: color,
        padding: '20px',
        boxSizing: 'border-box',
        width: width,
        height: height,
        flexShrink: 0,
        marginTop: '40px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return <div style={pageStyle}>{children}</div>;
}

export default Page;
