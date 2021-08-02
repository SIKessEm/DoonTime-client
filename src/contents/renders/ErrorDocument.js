import {Fragment} from 'react'
import NavBar from '../widgets/NavBar'
import '../designs/Document.scss'

export default function ErrorDocument({code}) {
  return (
    <Fragment>
      <NavBar/>
      <div className="ErrorDocument">
        <div className="App-main container">
          <main className="container">
            <h1>Error {code}</h1>
            <div>
                <p>Document not found</p>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};
