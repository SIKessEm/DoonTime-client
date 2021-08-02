import {Fragment} from 'react'
import logo from '../../logo.svg';

export default function MainHeader() {
  return (
    <Fragment>
      <div className="Main-header">
        <header>
          <p className="pt-3"><img src={logo} className="Main-logo" alt="icon"/></p>
          <h1 className="h3"><a className="Main-link" href="https://sikessem.com" target="_blank" rel="noopener noreferrer">SIKessEm</a> DoonTime</h1>
        </header>
      </div>
    </Fragment>
  );
};
