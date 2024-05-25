// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherBox from './WeatherBox';
import Predictions from './Predictions';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <div className="navbar">
                    <h1>Agro Assit</h1>
                    <p>Cultivate Success</p>
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-items"><Link to="/">Home</Link></li>
                            <li className="nav-items"><Link to="/Predictions">Analytics</Link></li>
                            <li className="nav-items"><Link to="/history">History</Link></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={
                        <div className="home">
                            <div className="quote">
                                {/* You can add quote content here */}
                            </div>
                            <WeatherBox />
                        </div>
                    } />
                    <Route path="/Predictions" element={<Predictions />} />
                    <Route path="/history" element={
                        <div className="history">
                            <h2>History Section</h2>
                            {/* Add history related content here */}
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
