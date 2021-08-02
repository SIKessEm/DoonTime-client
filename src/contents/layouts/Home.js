import {Fragment} from 'react'
import { Button } from 'react-bootstrap'

export default function Home(){
  return (
    <Fragment>
      <div className="cover-container pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Manage your daily tasks well with DoonTime</h1>
          <p className="lead">DoonTime helps you organize your activities to get your tasks done on time without the hassle.</p>
          <p className="lead">
            <Button href="/learning-more" variant="info" size="lg" className="my-2 mx-3 fw-bold">Learn more</Button>
            <Button href="/get-starting" variant="primary" size="lg" className="my-2 mx-3 fw-bold">Get started</Button>
          </p>
        </main>
      </div>
    </Fragment>
  )
};
