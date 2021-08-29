import React from 'react'

import {Fragment} from 'react'

export default function LearnMore(){
  return (
    <Fragment>
      <div className="cover-container pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Learn more about {process.env.REACT_APP_WEBSITE_SHORTNAME}</h1>
        </main>
      </div>
    </Fragment>
  )
};
