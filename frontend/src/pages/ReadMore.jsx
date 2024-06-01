import React, { useEffect ,useState } from "react";
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';


function ReadMore() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
    useEffect(()=> {  
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/todos/${id}`);
          console.log(id); 
          setTodos(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchData();  
    }, []);

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:5000/api/todos/${id}`);
          navigate('/todos');
        } catch (error) {
          console.error('Error deleting todo:', error.message);
        }
      };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    
    <div className="pt-4 flex gap-3 flex-wrap">
      
  <div  className="min-w-64 h-24 bg-slate-700 gap-2 rounded-xl tracking-tighter p-2">
  <h2>{todos.title}</h2>
  <p>{todos.body}</p>
  <div className="text-slate-400 cursor-pointer mt-2 flex justify-between text-sm ">
  <p>edit</p>
  <p onClick={handleDelete}>drop</p>
  </div>
 </div>
      
        </div>
   
  )
}

export default ReadMore
