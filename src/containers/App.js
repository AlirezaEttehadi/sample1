import React, { useState } from "react";
import "../styles/App.css";

import Header from "../components/Header/Index";
import UserInput from "../components/UserInput/Index";
import Button from "../components/Button/Index";
import MessageBox from "../components/MessageBox/Index";

function App() {
  const [signUp, setSignUp] = useState("sign up");
  const [message, setMessage] = useState({ toggle: false, message: "" });

  const inputHandler = (event) => {
    // setMessage({ toggle: false, message: "" });
    setSignUp(event.target.value);
    if (event.target.value === "") setSignUp("sign up");
  };

  const clickHandler = () => {
    setMessage({ toggle : !message.toggle, message: signUp });
  };

  return (
    <div className="App">
      <Header />
      <UserInput input={inputHandler} />
      <Button changed={signUp} click={clickHandler} />
      {message.toggle ? <MessageBox msg={message} /> : null}
    </div>
  );
}

export default App;
