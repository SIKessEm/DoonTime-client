import React, {Fragment} from 'react'

import logo from '../../logo.svg';

export default function MainHeader() {
  return (
    <Fragment>
      <div className="Main-header">
        <header>
          <h1 className="h3 pt-5"><a className="Main-link" href="/" title={process.env.REACT_APP_WEBSITE_FULLNAME}><img src={logo} className="Main-logo" alt={process.env.REACT_APP_WEBSITE_SHORTNAME}/></a></h1>
        </header>
      </div>
    </Fragment>
  );
};
