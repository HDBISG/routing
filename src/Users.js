import React from "react";
import { Route, Link } from "react-router-dom";

const User = ({ match, location, props }) => {
  console.log(`${JSON.stringify(match)}`, `${JSON.stringify(location)}`, `${JSON.stringify(props)}` );
  return <p>{match.params.id}</p>;
};

class Users extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/users/1?id=a">User 1 </Link>
          </li>
          <li>
            <Link to={{'pathname':'/users/2', 'querya':'{id:b}'}}>User 2 </Link>
          </li>
          <li>
            <Link to="/users/3?id=c">User 3 </Link>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
        <p> end User page</p>
      </div>
    );
  }
}

export default Users;
