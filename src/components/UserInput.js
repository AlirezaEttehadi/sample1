import React from 'react';
import "../styles/UserInput.css"

function UserInput(props) {
    return (
      <div className="user-input">
          <label>Please Enter Your UserName : </label>
          <input type="text" onChange={props.input} />
      </div>
    );
  }
  
  export default UserInput;