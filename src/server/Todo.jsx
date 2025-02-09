import React from "react" ; 
import { useState} from 'react' ; 


export default function Todo() { 
  let data = [{ 
      id : 1 , 
      message : "hello",
      status : false 
  },
  {
      id : 2 , 
      message : "go walk the dog" ,
      status : false  
  },
  {
      id : 3 , 
      message: "go studing math" , 
      status: false
  }];
  const [todos , setTodos] = useState(data);
  const [message , setMessage] = useState("");

  function addTodo(e) { 
    let newTodo = {
      id : todos.length + 1 ,
      message : message , 
      status : false 
    }
    data = [...data, newTodo]; 
    setTodos([...todos, newTodo]);
    
  }
    















  function deleteTodo(todo){
      let i = 0 ; 
      while(i < data.length) { 
        if(data[i].id == todo.id){ 
        data[i].status = true ; 
        }
        i++ 
      }

      setTodos(todos.filter((a) => a.id  !== todo.id ));
      
  }





  return ( 
   <div>

    <div>
      <input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="goal"></input>
      <button onClick={addTodo}  >send</button>       
    </div>     

    
   <ul>
     {todos.map((todo) => {
        if (todo.status ==false) {
          return(
             <div key={todo.id}>
             <h1>{todo.message}</h1>
             <button onClick={() => deleteTodo(todo)} >done</button>
             </div>

          );
        }})
      }
   </ul>
   
   </div>
  );


}


