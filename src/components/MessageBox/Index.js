import React from 'react';
import "./MessageBox.css"

function MessageBox({msg}) {
    return (
      <div className="message-box">
          <h3>Hello : {msg}</h3>
      </div>
    );
  }
  
  export default MessageBox;