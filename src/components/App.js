import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[task,setTask]=useState("");
  const[taskList,setTaskList]=useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const addItems=()=>{
    setTaskList([...taskList,task]);
    setTask("");
  }
  const removeItem=(index)=>{
    const updatedList=taskList.filter((item,i)=>i!==index);
    setTaskList(updatedList);
  }

  return (
    <div>
        <p>To-Do List</p>
        <input type="text" id="task" placeholder="Add a new task" value={task} onChange={handleChange} />
        <button id="btn" type="button" onClick={addItems}>Add Todo</button>
        <ul>
          {
          taskList &&
          taskList.map((item,index)=>(
            <li key={index}>{item} <button onClick={()=>removeItem(index)}>Delete</button></li>
          ))}
        </ul>
    </div>
  )
}

export default App
