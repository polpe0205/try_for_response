import React, {useRef, useState, useEffect} from "react" ; 

export default function Timer() {
  const [timer, setTimer] = useState(0); 
  const [status, setStatus] = useState(false) ; 
  const [id , setId] = useState(null);
  const [ min , setMin] = useState(0);
  const [hours , setHours] = useState(0); 
  const [sec ,setSec] = useState(0);


  
  const [showClear, setShowClear]= useState(false);
  const [showInputTimer, setShowInputTimer]= useState(true); 
  const [showTimer , setShowTimer] = useState(false);
  const [showStop , setShowStop] = useState(false); 

  const [ st , setSt] = useState("stop"); //

  useEffect(() => {
    
    const z  = setInterval(() => {
    if(status == false) { 
      clearInterval(id);
    }
    else{
    
    setTimer((t) => {
      if (t === 0 ) {
          clearInterval(id);
          return 0 ; 
      }
      else{
          return t - 1  ; 
      }});
    setMin(Math.floor(timer / 60 )); 
    setSec(timer % 60);
      }}, 1000);
    setId(z);
   return () => clearInterval(z); 
  } , [timer, status]);




  

  function  Clear() {
         
       setTimer(0); // stop the timer and it set it to zero 
       //clears the scree timer 
       setMin(0);
       setSec(0);
       
       setShowTimer(!showTimer);
       setShowStop(!setShowStop);
       setShowClear(!showClear);
       setShowInputTimer(!showInputTimer);
   } 
  function handleSubmit(e) {
    e.preventDefault();
    let allMinutes = e.target.count.value ;


    if (allMinutes > 0 ) {
      setTimer((allMinutes * 60));
      console.log(allMinutes);
      setStatus(true);
      setShowInputTimer(false);
      setShowTimer(true);
      setShowStop(true);
      
      
    }
  } 

  function InputTimer() {
    return(
     <form  onSubmit={handleSubmit}>
       
     <input type="number"  name="count"/>
     <button type="submit">start</button> 
      </form>
    );
  }
  
  function startStop() {
    setShowClear(!showClear);

    if(status == true ) {
      setStatus(false); // stop the timer
      setShowStop(true);
      setSt("start");
    } 
    else{
      setStatus(true); // start the timer 
      setShowStop(true);
      setSt("stop");
    }/*
    setStatus(!status);
    setShowClear(!showClear);
    setShowStop(!showStop);
    (status == true ) ? setSt("Start") : setSt("Stop");
    */
  } 

  return(
    <div className="timer">

    {showTimer && <h1>{min}:{sec}</h1>}
    {showInputTimer && <InputTimer/>}
    <div>
    {showClear && <button onClick={() => {Clear();}}>clear</button> }  
    {showStop && <button onClick={() => {startStop();}}>{st}</button>}
    </div>
  </div>
  );
}




















