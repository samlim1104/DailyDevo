import React from 'react';

function Page({ children, style = {} }) {
    const pageStyle = {
        borderRadius: '20px',
        background: '#FAFAFA',
        padding: '20px',
        boxSizing: 'border-box',
        width: '750px',
        height: '700px',
        flexShrink: 0,
        marginTop: '40px',
        
    };

    return <div style={pageStyle}>{children}</div>;
}

export default Page;