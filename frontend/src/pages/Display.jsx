import React, { useEffect ,useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function Display() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(()=> {  
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/todos');
          console.log(response.data); 
          setTodos(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchData();  
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    
    <div className="p-12 flex gap-3 flex-wrap">
        {todos.map((todo) => (
  <div key={todo.id} className="w-64 h-24 truncate bg-slate-700 gap-2 rounded-xl p-4">
  <h2 className="font-semibold">{todo.title}</h2>
  <p className="text-gray-300">{todo.body}</p>
  <div className="text-slate-400 cursor-pointer mt-2 flex justify-between text-sm ">
  <Link to={`/todos/${todo._id}`} className="place-items-baseline" >read more</Link>

  </div>
 </div>
        ))}
      
        </div>
   
  )
}

export default Display
