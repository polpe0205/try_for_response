import React from "react" ; 
import { useState, useEffect} from 'react'; 



export default function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
     setTime(new Date()); 
    }, 1000); 
  
    return () => clearInterval(timer); }, [])



  






  return(
    <div>
      <h1>{time.getHours()}:{time.getMinutes()}</h1>
    </div>  
  )
}




