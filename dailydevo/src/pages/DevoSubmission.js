// pages/DevoSubmission.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from '../components/Header/LoggedInHeader.js';

function DevoSubmission() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", username);
    
        try {
            const response = await fetch('/api/upload-devo', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                navigate('/daily');
            } else {
                console.error('Failed to upload');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
        fontSize: '32px', // Adjust font size for better readability
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Adds some shadow for styling
        padding: '40px',
        width: '80%', // Adjust the width to suit your design
        maxWidth: '800px', // Limit the width for larger screens
        
    };

    return (
        <div style={{ backgroundColor: '#F7E4CB', minHeight: '100vh' }}>
            <LoggedInHeader />
            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <h2>Submit Your Devo Here!</h2>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <input type="file" onChange={handleFileChange} />
                        <br />
                        <button type="submit" style={{ marginTop: '20px' }}>
                            Upload and Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DevoSubmission;
