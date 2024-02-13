import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@atlaskit/css-reset';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';


function App() {
  return (
    // <Button>Hello world</Button>
    <Router>
    <Routes>
      <Route path="" element={<Login/>} index /> 
      <Route path="/dashboard" element={<Dashboard/>} index /> 
    </Routes>
  </Router>
  );
}

export default App;
