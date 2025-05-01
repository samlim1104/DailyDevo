// pages/About.js
import React from 'react';
import Header from '../components/Header/Header.js';

function About() {
    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Kaisei Decol", serif',
        flexDirection: 'column', // This will stack the text vertically
        textAlign: 'center', // Center the text inside the section
        padding: '20px', // Add some padding around the section
        marginTop: '40px', // Add a margin to ensure space between the header and the section
    };

    const sectionStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        fontFamily: '"Kaisei Decol", serif',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Adds some shadow for styling
        padding: '40px',
        width: '80%', // Adjust the width to suit your design
        maxWidth: '800px', // Limit the width for larger screens
    };

    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <Header />
            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <h2>Daily Devo</h2>
                    <p>
                        “Blessed is he who reads and those who hear the words of the prophecy, and heed the things which are written in it; for the time is near.” Revelation 1:3

                        Blurb here explaining this a bit more
                        Blurb here explaining this a bit more
                        Blurb here explaining this a bit more
                        Blurb here explaining this a bit more
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
