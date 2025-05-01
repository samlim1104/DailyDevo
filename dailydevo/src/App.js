// Filename - App.js
import React from 'react';
import Header from './components/Header/Header.js';
import Page from './components/Page.js';

function App() {

    const pageGroupStyle = {
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
    };

    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <Header />
            <div style={pageGroupStyle}>
              <Page />
              <Page />
            </div>
        </div>
    );
}

export default App;
