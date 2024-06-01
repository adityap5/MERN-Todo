import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav>
      <Link to="/" className="text-slate-700 p-2 hover:text-white">Home</Link>
      {token ? (
        <div className="flex gap-4 pb-4 pt-4 bg-slate-900 p-4 rounded-lg mt-4 mb-4 justify-between ">
          <Link to="/todos" className="hover:text-slate-500">View Todos</Link>
          <Link to="/add-todo" className="hover:text-slate-500">Add Todo</Link>
          <button onClick={handleLogout} className="hover:text-slate-500">Logout</button>
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
