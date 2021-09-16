import React from 'react';
import './Navbar.scss'
import { NavLink} from "react-router-dom";

class NavbarComponent extends React.Component {
  render() {
    return <div className="topnav">
      <NavLink to="/" exact={true} activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/todo" activeClassName="active">
        Todo
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/user" activeClassName="active">
        User
      </NavLink>
    </div>;
  }
}

export default NavbarComponent;