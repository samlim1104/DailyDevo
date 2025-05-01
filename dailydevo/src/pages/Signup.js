// pages/Singup.js
import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header.js';

export default function Signup() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

    const handleSignup = async () => {
        const res = await fetch("http://localhost:3000/signup", {
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
            <h2>Sign Up</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignup}>Sign Up</button>
            <p>{msg}</p>
        </div>
    );
}
