import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <div className="flex gap-4 pb-4 pt-4">
          <Link to="/todos">View Todos</Link>
          <Link to="/add-todo">Add Todo</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="gap-4 flex">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
