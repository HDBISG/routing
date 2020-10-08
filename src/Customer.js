import React from "react";
import { useHistory } from "react-router-dom";



function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

function Customer() {
  let history = useHistory();
  const onSubmit = () => {
    //this.props.history.push("/");
    history.push("/home");
  };
  return (
    <form>
      <input placeholder="name" type="name" />
      <input placeholder="email" type="email" />
      <button onClick={ onSubmit }>Customer</button>
    </form>
  );
}

export default Customer; 
