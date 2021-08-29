import {React, Fragment} from 'react'

import {NavLink} from 'react-router-dom'

import Brand from './Brand'

export default function NavBar() {
  return (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Brand/>
        <nav className="navbar-nav">
          <NavLink className="nav-item nav-link" activeClassName="active" exact to="/login">Log in</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" exact to="/signup">Sign Up</NavLink>
        </nav>
      </div>
    </Fragment>
  );
};
