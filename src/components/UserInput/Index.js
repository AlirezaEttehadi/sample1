import React from 'react';
import "./UserInput.css"

function UserInput({input}) {
    return (
      <div className="user-input">
          <label>Please Enter Your UserName : </label>
          <input type="text" onChange={input} />
      </div>
    );
  }
  
  export default UserInput;