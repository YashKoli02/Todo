import  { FormEvent, useState } from 'react'
import { useTodos } from '../store/Todos';

const Addtodo = () => {
    const[todo,setTodo]=useState("");
    const {handleAddTodo}=useTodos();
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       if(!todo){
        alert("Please enter valid task");
        return;
       }
        handleAddTodo(todo)
        setTodo("")
    }
  return (
   <form onSubmit={handleFormSubmit}>
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button type='submit'>Add</button>
   </form>
  )
}

export default Addtodo