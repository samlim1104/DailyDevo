// pages/Login.js
import React from 'react';
import Header from '../components/Header/Header.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleLogin = async () => {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const text = await res.text();
        setMsg(text);
    };

    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <Header />
            <div style={contentStyle}>
                <div style={sectionStyle}>
                <h2>Login</h2>
                    <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                    <p>{msg}</p>

                    <p>
                        Don't have an account? <Link to="/Signup">Sign Up</Link>
                    </p>
                </div>
            </div>
            
        </div>
    );
}
