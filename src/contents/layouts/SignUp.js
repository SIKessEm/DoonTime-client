import {React, Fragment} from 'react'

import {Link} from 'react-router-dom'

import {Container, Form, Row, Col, FloatingLabel, Button} from 'react-bootstrap'

export default function Home(){
  return (
    <Fragment>
      <Container className="pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Create your free account</h1>
          <Form method="POST" action="#">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel controlId="floatingInputGrid" label="Enter your email">
                  <Form.Control type="email" placeholder="Enter your email" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridUsername">
                <FloatingLabel controlId="floatingInputGrid" label="Enter your username">
                  <Form.Control type="text" placeholder="Enter your username" />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel controlId="floatingInputGrid" label="Enter your password">
                  <Form.Control type="password" placeholder="Enter your password" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel controlId="floatingInputGrid" label="Repeat your password">
                  <Form.Control type="password" placeholder="Repeat your password" />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="flex-column">
              <Form.Group as={Col} className="mb-3 content-fit" controlId="formBasicCheckbox">
                <Form.Label>
                  <Form.Check inline={true} type="checkbox"/>
                  Have read <Link exact to="/privacy-policy">our privacy policy</Link> and accept <Link exact to="/terms-of-use">our terms of use</Link>.
                </Form.Label>
              </Form.Group>
              <Form.Group as={Col}>
                <Button variant="primary" type="submit">Sign up</Button>
              </Form.Group>
            </Row>
          </Form>
          <p className="lead pt-4">Already a member ? <Link exact to="/connection">Access your account !</Link></p>
        </main>
      </Container>
    </Fragment>
  )
};
