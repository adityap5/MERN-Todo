import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ token }) => {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to the Task Master Application</h1>
      <p className="text-center text-xl mt-2"> Manage your tasks efficiently with our simple and user-friendly Todo application.</p>
      
      {!token ? (
        <div className="text-center mt-8 bg-zinc-800 w-60 h-30 rounded-xl grid p-9">
          <Link to="/register" className="hover:text-slate-400">Register</Link>
          <br />
          <Link to="/login" className="hover:text-slate-400">Login</Link>
        </div>
      ) : (
        <div>
          <Link to="/todos">View Todos</Link>
          <br />
          <Link to="/add-todo">Add Todo</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
