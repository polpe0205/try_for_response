import React, { useState, useRef , useEffect } from "react" ; 
import ReactDOM from "react-dom/client" 




function Button () {
 // const [seconds , setseconds] = useState(0) ; 
  const [ welcome, set_welcome] = useState(""); 
  const [ message, setMessage] = useState("");

  const [ log_resp , setResp] = useState("inserire il nome utente "); 
  const usr =  ["ospite", "polpe"] ;// utenti disponibili  in futuro vanno usati quelli di un database  o di un json 
  //const [log_state, setLog] = useState(false );

  let log_email =  document.querySelector("#log_email"); 
  let intro = document.querySelector("#intro");
  const [isActive , setisActive] = useState(false )  ;
  


  function toggleTimer () {
    setisActive(!isActive); 
  }
  function reset() {
    setseconds(0) ;
    setisActive(false);
  }
  useEffect (() => {
    let interval = null ; 
    if(isActive) {
    interval = setInterval ( () => {
      setseconds(seconds => seconds +1) ; 

    }, 1000);
    }
    else if (!isActive && seconds !==0 ) {
        clearInterval(interval) ; 

      }
    return () => clearInterval(interval);

  
  } , [isActive, seconds]) ; 




  function click(event) {
    if (message  == usr[1] || message == usr[0]) { 
      set_welcome("welcome => " + usr[1] ); 
      event.currentTarget.hidden = true  ;
      log_email.hidden = true ; 
    }
    
    else { 
      setResp("non esistono utenti  con questo nome  rinserire  l' utente"  ) ;
      intro.style = 'color : red ;' ; 
    }
  }
  function change(event) {
      setMessage(event.target.value);
  }
  function statusTimer() {
    if (isActive == true ) {
      return("pause"); 
    }
    else {return("start");}
  }



  return (
  <div id="div_01">
    <p>{welcome}</p>
    <div id="timer" >{seconds}</div>
    <div>
      <button type="onClick" onClick={toggleTimer}>{statusTimer}start</button>
      <button type="onClick" onClick={reset} >stop</button>
    </div> 
    <div id = "log_email">
    <p id="intro" >{log_resp}</p>
    <input  id=""  onChange={change} value={message}/>
    <button      onClick={click } >click me </button>
    </div>
      
  </div>

  );
}











export default Button 


