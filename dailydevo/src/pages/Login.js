// pages/Login.js
import React from 'react';
import Header from '../components/Header/Header.js';
import { useState } from 'react';

export default function Login() {
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
            <h2>Login</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>{msg}</p>
        </div>
    );
}
