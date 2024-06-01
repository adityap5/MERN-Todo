import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TodoForm from './pages/TodoForm';
import Register from './pages/Register';
import Login from './pages/Login';
import Display from './pages/Display';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ReadMore from './pages/ReadMore';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);

  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
    <Navbar token={token} handleLogout={handleLogout} />
    <Routes>
      <Route path="/" element={<HomePage token={token} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={!token ? <Login setToken={handleLogin} /> : <Navigate to="/" />} />
      <Route path="/todos" element={token ? <Display token={token} /> : <Navigate to="/login" />} />
      <Route path="/add-todo" element={token ? <TodoForm token={token} /> : <Navigate to="/login" />} />
      <Route path="/todos/:id" element={token ? <ReadMore token={token} /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
  );
};

export default App;
