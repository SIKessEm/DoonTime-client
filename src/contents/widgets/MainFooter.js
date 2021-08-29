import {React, Fragment} from 'react'

export default function MainFooter() {
  return (
    <Fragment>
      <div className="Main-footer mt-5">
        <footer>
          <p>{process.env.REACT_APP_WEBSITE_SHORTNAME} &copy; 2021 <a className="Main-link" href="https://sikessem.com/" target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_AUTHOR_FULLNAME}</a></p>
        </footer>
      </div>
    </Fragment>
  );
};
