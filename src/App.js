// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherBox from './WeatherBox';
import Analytics from './Analytics';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <div className="navbar">
                    <h1>Farm Management</h1>
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-items"><Link to="/">Home</Link></li>
                            <li className="nav-items"><Link to="/analytics">Analytics</Link></li>
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
                            <div className="analysis">
                                {/* You can add analysis content here */}
                            </div>
                        </div>
                    } />
                    <Route path="/analytics" element={<Analytics />} />
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
