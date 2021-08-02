import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../designs/Document.scss'

class ErrorDocument extends React.Component {

  componentDidMount() {
    switch (this.props.code) {
      case 404:
        document.title = 'Not found'
        break;

      default:
        document.title = `Error document ${this.props.code}`
        break;
    }
  }

  _404() {
    return (
      <Container fluid={true} className="bg-dark text-light">
        <main className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
          <h1 className="mt-5 mb-2">Error document {this.props.code}</h1>
        <div className="text-center">
            <p className="lead">The requested content does not exist in our documents</p>
            <p className="text-center"><Link exact to='/' className='btn btn-lg btn-light'>Go to home</Link></p>
          </div>
        </main>
      </Container>
    );
  }

  render () {
  return (
    this[`_${this.props.code}`]()
  );
 }
}

export default ErrorDocument
