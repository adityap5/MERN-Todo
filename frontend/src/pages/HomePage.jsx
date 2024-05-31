import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ token }) => {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to the Todo Application</h1>
      <p className="text-center text-xl mt-2"> Manage your tasks efficiently with our simple and user-friendly Todo application.</p>
      
      {!token ? (
        <div>
          <Link to="/register">Register</Link>
          <br />
          <Link to="/login">Login</Link>
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
