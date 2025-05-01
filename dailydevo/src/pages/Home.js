// pages/Home.js
import React from 'react';
import Header from '../components/Header/Header.js';
import Bible from '../components/Bible/Bible.js';

function Home() {
    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <Header />
            <Bible />
        </div>
    );
  
}

export default Home;
