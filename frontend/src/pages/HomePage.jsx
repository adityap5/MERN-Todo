import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ token }) => {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to the Task Master Application</h1>
      <p className="text-center text-xl mt-4 text-zinc-500"> Manage your tasks efficiently with our simple and user-friendly Todo application.</p>
      <p className="text-center text-xl mt-4">But first Register/login</p>
      {!token ? (
       
        <div className="place-items-center  mt-8 bg-zinc-800 rounded-xl grid p-9">
          <Link to="/register" className="hover:text-slate-900 pt-4 pl-6 pr-6 pb-4 rounded-2xl bg-slate-400">Register</Link>
          <br />
          <Link to="/login" className="hover:text-slate-900 pt-4 pl-8 pr-8 pb-4 rounded-2xl bg-slate-400">Login</Link>
        </div>
      ) : (
        <div className="place-items-center  mt-8 bg-zinc-800 rounded-xl grid p-9">
          <Link to="/todos" className="hover:bg-green-900 pt-4 pl-8 pr-8 pb-4 rounded-2xl font-semibold bg-green-700">View Todos</Link>
          <br />
          <Link to="/add-todo" className="hover:bg-green-900 pt-4 pl-8 pr-8 pb-4 font-semibold rounded-2xl  bg-green-700">Add Todo</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
