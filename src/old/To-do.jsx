
import React, { useState } from "react";
//import Orm from "./backend/orm.js"; 

export function ToDo () { 
 

  const  [Buttons ,SetButtons ]  = useState(0);
  const  [Inputs, SetInputs] = useState(""); 

  function button_event (e) { 
    e.preventDefault();
    SetButtons(Buttons + 1)
  }
   
  
 function ToDo_banner () { 
  console.log(Inputs);
  return(
   <div className="ToDo_banner">
     <button type="" className="ToDo_done"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none"><path d="M37.3043 0.651851C37.7498 1.06977 38 1.63628 38 2.22695C38 2.81761 37.7498 3.38412 37.3043 3.80204L14.3088 25.3481C13.8628 25.7655 13.2581 26 12.6278 26C11.9974 26 11.3927 25.7655 10.9467 25.3481L0.638379 15.6895C0.218406 15.2668 -0.0102911 14.7079 0.000355736 14.1304C0.0110026 13.5529 0.260164 13.0018 0.695471 12.5929C1.13192 12.185 1.72013 11.9515 2.33646 11.9416C2.95279 11.9316 3.54926 12.1459 4.00048 12.5394L12.6278 20.6229L33.9422 0.651851C34.3882 0.23445 34.9929 0 35.6232 0C36.2536 0 36.8583 0.23445 37.3043 0.651851Z" fill="white"/></svg>
     </button>

     <h2 className="ToDo_text">{Inputs}</h2>
   </div>  
   );
 }






  
  return(
  <>
  <div id="form" className="NewToDo_form" >
    <input  className="NewToDo_input"type="tetx" id="activity" placeholder="New activity" onChange={(e) =>  SetInputs(e.target.value)}/>
    <button className="NewToDo_button" type="submit" onClick={button_event}>




      <svg className="NewToDo_arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_11_15)"><path d="M19.6093 7.51469L27.152 15.0574C27.402 15.3074 27.5424 15.6465 27.5424 16C27.5424 16.3536 27.402 16.6926 27.152 16.9427L19.6093 24.4854C19.3579 24.7282 19.0211 24.8626 18.6715 24.8596C18.3219 24.8565 17.9875 24.7163 17.7402 24.4691C17.493 24.2219 17.3528 23.8875 17.3498 23.5379C17.3467 23.1883 17.4811 22.8515 17.724 22.6L22.9907 17.3334H5.33333C4.97971 17.3334 4.64057 17.1929 4.39052 16.9428C4.14048 16.6928 4 16.3536 4 16C4 15.6464 4.14048 15.3073 4.39052 15.0572C4.64057 14.8072 4.97971 14.6667 5.33333 14.6667H22.9907L17.724 9.40002C17.5967 9.27702 17.4951 9.1299 17.4252 8.96723C17.3553 8.80455 17.3185 8.62959 17.317 8.45255C17.3155 8.27552 17.3492 8.09994 17.4162 7.93608C17.4833 7.77222 17.5823 7.62335 17.7075 7.49816C17.8327 7.37297 17.9815 7.27397 18.1454 7.20692C18.3093 7.13988 18.4848 7.10615 18.6619 7.10769C18.8389 7.10922 19.0139 7.14601 19.1765 7.21588C19.3392 7.28576 19.4863 7.38734 19.6093 7.51469Z" fill="#F8F8F8"/></g><defs><clipPath id="clip0_11_15"><rect width="32" height="32" rx="16" fill="white"/></clipPath></defs></svg>    
    </button>
  </div>
  <div className="ToDo_box">
    { [...Array(Buttons)].map((_, i) => <ToDo_banner key={i} />) }
  </div>
  </>

) ;
}



































