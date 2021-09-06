import React, {Fragment} from 'react'

import {Link} from 'react-router-dom'

import {Container, Form, Row, Col, FloatingLabel, Button} from 'react-bootstrap'

export default function Home(){
  return (
    <Fragment>
      <Container className="pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Get started on {process.env.REACT_APP_WEBSITE_SHORTNAME}</h1>
        <p className="lead"><Link exact to="/connection">Log in</Link> or <Link exact to="/registration">sign up for free</Link> to take advantage of Doontime</p>
          <Form>
            <Row className="flex-column">
              <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel controlId="floatingInputGrid" label="Enter your username or email">
                    <Form.Control type="email" placeholder="Enter your username or email" />
                  </FloatingLabel>
                  <Form.Text className="text-muted">
                    We'll never share your username or email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-auto mb-3 content-fit" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Subscribe to our newsletter to stay informed for free" />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">Continue &hellip;</Button>
              </Col>
            </Row>
          </Form>
        </main>
      </Container>
    </Fragment>
  )
};
