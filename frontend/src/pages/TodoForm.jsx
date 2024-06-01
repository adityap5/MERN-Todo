import React, { useState } from 'react';
import axios from 'axios';

import Display from './Display'
function TodoForm({ token }) {
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/todos', {
        title,
        body
      
      });
      console.log('Todo saved:', response.data);
      setTitle('');
      setBody("");
      window.location.reload();
    } catch (error) {
      console.error('Error saving todo:', error.message);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold ">
      TODOs
    </h1>
    <form onSubmit={handleSubmit} className="grid gap-10 pt-2">
      <input 
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       type="text"
       placeholder="Title"
       className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-1/2' />
      <input 
      value={body}
      onChange={(e) => setBody(e.target.value)}
      type="text" 
      placeholder="Body" 
      className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-1/2'/>
      <button type="submit" className=" bg-green-700 p-2 w-16 rounded-lg">Enter</button>
    </form>
    <Display/>
    </>
  )
}

export default TodoForm
