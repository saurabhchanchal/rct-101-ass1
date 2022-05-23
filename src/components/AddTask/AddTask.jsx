import React, {useState} from "react";
import styles from "./addTask.module.css";

const AddTask = (data) => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo,setTodo] = useState([]);
  const [value,setValue] = useState("");

  const [show,setShow] = useState()
  console.log(data);

  const toogle = (id) => {
    const update = todo.map((e) => 
    e.id===id ? {...e,status: ! e.status} : e
    )
  }

  const handledelete = (id) => {
    const del = todo.filter((e)=> e.id !==id)
    setTodo(del)
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value = {value} onChange={(e) => setValue(e.target.value)} />
      <button data-cy="add-task-button" disabled={!value} onClick={()=> {
        setTodo([...todo,{value:value}])
        setValue("")
      }}>Add</button>
      <div style={{display:"flex" , flexDirection: "colum" }}>
        <div>
      {data.data.map((e)=>(e.text))}
      </div>
      <br /> <br />
      <div>
      {data.data.map((e)=>(e.count))}
      </div>
      <br /> <br />
      <div>
      {data.data.map((e)=>(e.status))}
      </div>
      </div>
      <div>
        {
          todo.filter((e)=>(show?true: !e.status)).map((todo) => (
            <div style={{display:"flex"}}>
              <input type="checkbox" onClick={(e) => toogle(data.data.id)} />
              <div>{todo.value}</div>
              <button onClick={()=> handledelete(data.data.id)}>Delete</button>
            </div>
          ))
        }
      </div>

       <button onClick={()=>setShow(!show)}>{show?"Unfinished":"show all"}</button>
    </div>
    
  );
};

export default AddTask;
