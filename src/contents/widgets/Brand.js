import {React, Fragment} from 'react'

import {NavLink} from 'react-router-dom'

import logo from '../../logo.svg';

export default function Home() {
  return (
    <Fragment>
      <NavLink className="navbar-brand" href="#" exact to="/">
        <img src={logo} className="Main-logo rounded d-inline-block align-top" alt="logo" height="30"/>
      </NavLink>
    </Fragment>
  );
};
