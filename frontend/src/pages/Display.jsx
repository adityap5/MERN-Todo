import React, { useEffect ,useState } from "react";
import axios from 'axios';
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
    
    <div className="pt-4 flex gap-3 flex-wrap">
        {todos.map((todo) => (
  <div key={todo.id} className="min-w-64 h-24 bg-slate-700 gap-2 rounded-xl tracking-tighter p-2">
  <h2>{todo.title}</h2>
  <p>{todo.body}</p>
  <div className="text-slate-400 cursor-pointer mt-2 flex justify-between text-sm ">
  <p >read more</p>
  <p>edit</p>
  </div>
 </div>
        ))}
      
        </div>
   
  )
}

export default Display
