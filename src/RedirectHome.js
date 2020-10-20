import React from 'react'
import { Redirect } from "react-router-dom";

class RedirectHome extends React.Component {
  render() {
    return (
      <div>
        <p> Redirect</p>
        <Redirect to="/home"/> 
      </div>
    )
  }
}
export default RedirectHome