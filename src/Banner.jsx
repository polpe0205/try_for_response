import React, { useState }from 'react' ; 
import { useMutation, gql} from '@apollo/client' ; 


const ADD_TODO = gql` 
  mutation AddTodo($message: String! ) {
   addTodo(message: $message) {
     id 
     message 
     status
    }
}
  
`
;








export function Banner ( ) { 
  const [message, setMessage] = useState('');
  const [addTodo, {data , loading , error }] = useMutation(ADD_TODO);
  

  const handleSubmit = async(e)  => {
    e.preventDefault(); 
    try {
      await addTodo({ variables: {message : message}}); 
      alert("goal setted ") ; 
    }catch(err) {
      console.error(err); 

    }
  };

  return( 
    
  
  <form onSubmit={handleSubmit}>
    <input id="goal"type="text" value={message} onChange={ (e) => {setMessage(e.target.value)}} placeholder="goal"/>
    <button type="Submit" >send</button>
    {error && <p>Error: {error.message}</p>}
  </form>
 
  ); 
}


/* 
function Banner() { 
  

  return(
    
    <div className="Banner">
    <input placeholder="task" type="" name="" value=""></input>
    <div className="Banner-buttons">
    <button type="">scadenza</button> 
    <button type=""></button>
    </div>
    </div>
  );
}
 
*/ 
















function Todo() { 
  return(
    <div className="Todo">
    <input type="" name="" value=""></input>
    
    <button type="">scadenza</button> 
    <button type=""></button>
    </div>
  );
}
















export default(Banner); 
