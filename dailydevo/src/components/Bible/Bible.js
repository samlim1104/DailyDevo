import React from 'react';
import Page from './Page.js';

function Bible() {
    const pageGroupStyle = {
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        position: 'relative',
    };

    const smallPageStyle = {
        width: '500px',
        height: '100px',
        borderRadius: '20px',
        opacity: 0.8,
        background: 'rgba(254, 219, 207, 0.80)',
        position: 'absolute', // Positioning the small pages on top of the large ones
        top: '50%', // Align them in the middle of the parent Page
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the small pages horizontally and vertically
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const lineStyle = {
        position: 'absolute',
        width: '100%',
        height: '1px',
        backgroundColor: '#ddd',
        left: 0,
    };

    // Generate multiple horizontal lines spaced vertically
    const renderLines = () => {
        const lines = [];
        for (let i = 40; i < 700; i += 40) {
            lines.push(<div key={i} style={{ ...lineStyle, top: `${i}px` }} />);
        }
        return lines;
    };

    const textStyle = {
        position: 'absolute',
        fontFamily: '"Kaisei Decol", serif',
        fontSize: '32px',
        fontWeight: 'bold',
        top: '50%',
        transform: 'translateY(-50%)', // Vertically center the text
    };

    const dailyStyle = {
        ...textStyle,
        left: '10%', // Position "daily" on the left side of the small page
        color: "#000000",
        position: 'absolute',
    };

    const devoStyle = {
        ...textStyle,
        right: '10%', // Position "devo" on the right side of the small page
    };


    return (
        <div style={pageGroupStyle}>
            <Page color="#FAFAFA" width="750px" height="700px">
                {renderLines()}
                <div style={smallPageStyle}>
                </div>
            </Page>
            <Page color="#FAFAFA" width="750px" height="700px">
                {renderLines()}
                <div style={smallPageStyle}>
                    <div style={dailyStyle}>daily</div>
                    <div style={devoStyle}>devo</div>
                </div>
            </Page>
        </div>
    );
}

export default Bible;