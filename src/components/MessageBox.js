import React from 'react';
import "../styles/MessageBox.css"

function MessageBox(props) {
    return (
      <div className="message-box">
          <h3>Hello : {props.msg}</h3>
      </div>
    );
  }
  
  export default MessageBox;