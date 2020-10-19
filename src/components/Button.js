import React from 'react';
import "../styles/Button.css"

function Button(props) {
    return (
    <button onClick={props.click}>{props.changed}</button>
    );
  }
  
  export default Button;