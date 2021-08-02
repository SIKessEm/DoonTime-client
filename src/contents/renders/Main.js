import React from 'react'
import Header from '../widgets/MainHeader'
import Footer from '../widgets/MainFooter'
import './Main.scss'

export default function Main({Layout}) {
  return (
    <div className="Main container">
      <div className="row row-cols-1">
        <div className="col align-self-start">
          <Header/>
        </div>
        <div className="col align-self-center">
          <Layout/>
        </div>
        <div className="col align-self-end">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
