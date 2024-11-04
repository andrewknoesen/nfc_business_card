import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './pages/me';
import Hideaway from './pages/hideaway';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/me" element={<Me />} />
        <Route path="/hideaway" element={<Hideaway />} />
      </Routes>
    </Router>
  );
}

export default App;