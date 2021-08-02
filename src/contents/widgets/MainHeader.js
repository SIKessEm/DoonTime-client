import {Fragment} from 'react'
import logo from '../../logo.svg';

export default function MainHeader() {
  return (
    <Fragment>
      <div className="Main-header">
        <header>
          <img src={logo} className="Main-logo rounded-circle" alt="icon"/>
        <h1><a className="Main-link" href="https://sikessem.com" target="_blank" rel="noopener noreferrer">SIKessEm</a> DoonTime</h1>
        </header>
      </div>
    </Fragment>
  );
};
