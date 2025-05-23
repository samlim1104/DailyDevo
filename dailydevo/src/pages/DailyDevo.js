// pages/DailyDevo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInHeader from '../components/Header/LoggedInHeader.js';


function DailyDevo() {

    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const username = localStorage.getItem("username");

    const getFormattedDate = () => {
        const today = new Date();

        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'long' });
        const year = today.getFullYear();

        // Add ordinal suffix (1st, 2nd, 3rd, etc.)
        const getOrdinal = (n) => {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return s[(v - 20) % 10] || s[v] || s[0];
        };

        return `${month} ${day}${getOrdinal(day)}, ${year}`;
    };

    useEffect(() => {
        const fetchDailyImage = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/daily-image?username=${username}&date=${getFormattedDate()}`
                );
                if (response.data.imageUrl) {
                    setImageUrl(response.data.imageUrl);
                } else {
                    setError('No image found for today');
                }
            } catch (err) {
                setError('Failed to load daily image');
                console.error('API Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDailyImage();
    }, [username]);

    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <LoggedInHeader />
            <h1 style={{ textAlign: 'center', paddingTop: '20px', fontFamily: '"Kaisei Decol", serif', fontSize: '48px' }}>
                {getFormattedDate()}
            </h1>

            <div style={{ margin: '40px auto', width: '300px', height: '300px', 
                        backgroundColor: '#FFF', border: '2px dashed #ccc', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        borderRadius: '16px', overflow: 'hidden' }}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : imageUrl ? (
                    <img src={imageUrl} alt="Daily Devo" 
                         style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                    <p>No image for today</p>
                )}
            </div>
        </div>
    );
}

export default DailyDevo;