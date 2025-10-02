import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './pages/me';
import Hideaway from './pages/hideaway';
import Alchemy from './pages/alchemy'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/me" element={<Me />} />
        <Route path="/hideaway" element={<Hideaway />} />
        <Route path="/alchemy" element={<Alchemy />} />
      </Routes>
    </Router>
  );
}

export default App;