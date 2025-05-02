// Filename - App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DailyDevo from "./pages/DailyDevo";
import DevoSubmission from "./pages/DevoSubmission";

function App() {

    return (
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/daily" element={<DailyDevo />} />
              <Route path="/submission" element={<DevoSubmission />} />

            </Routes>
      </Router>
    );
}

export default App;
