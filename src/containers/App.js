import React, { useState } from "react";
import "../styles/App.css";

import Header from "../components/Header";
import UserInput from "../components/UserInput";
import Button from "../components/Button";
import MessageBox from "../components/MessageBox";

function App() {
  const [signUp, setSignUp] = useState("sign up");
  const [message, setMessage] = useState();

  const inputHandler = (event) => {
    setSignUp(event.target.value);
    if (event.target.value === "") setSignUp("sign up");
  };

  const clickHandler = () => {
    setMessage(signUp);
  };

  return (
    <div className="App">
      <Header />
      <UserInput input={inputHandler} />
      <Button changed={signUp} click={clickHandler} />
      <MessageBox msg={message} />
    </div>
  );
}

export default App;
