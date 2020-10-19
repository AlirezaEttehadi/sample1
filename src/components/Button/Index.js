import React from 'react';
import "./Button.css"

function Button({click,changed}) {
    return (
    <button onClick={click}>{changed}</button>
    );
  }
  
  export default Button;