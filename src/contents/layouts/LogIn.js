import React, {Fragment} from 'react'

import {Link} from 'react-router-dom'

import {Container, Form, Row, Col, FloatingLabel, Button} from 'react-bootstrap'

export default function Home(){
  return (
    <Fragment>
      <Container className="pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Access your account</h1>
          <Form method="POST" action="#">
            <Row className="flex-column">
              <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel controlId="floatingInputGrid" label="Enter your username">
                    <Form.Control type="text" name="login" placeholder="Enter your username" />
                  </FloatingLabel>
                  <Form.Text className="text-muted">
                    We'll never share your username or email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel controlId="floatingInputGrid" label="Enter your password">
                    <Form.Control type="text" name="login" placeholder="Enter your password" />
                  </FloatingLabel>
                  <Form.Text className="text-muted">
                    We'll never share your username or email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Row>
                <Col>
                  <Form.Group className="m-auto mb-3 content-fit" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="remember" label="Remember me" />
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">Log in</Button>
                </Col>
              </Row>
            </Row>
          </Form>
          <p className="lead pt-4">Not a member yet ? <Link exact to="/registration">Create your free account!</Link></p>
        </main>
      </Container>
    </Fragment>
  )
};
