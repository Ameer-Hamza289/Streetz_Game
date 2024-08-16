import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhaserGame from './components/Game';
// import LandingPage from './components/LandingPage';
import StreetzGamePoster from './components/GamePoster';
import Result from './components/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreetzGamePoster />} />
        <Route path="/game" element={<PhaserGame />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
