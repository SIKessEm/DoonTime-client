import React from 'react'
import Header from '../widgets/MainHeader'
import Footer from '../widgets/MainFooter'
import './Main.scss'

export default function Main({Layout}) {
  return (
    <div className="Main">
      <Header/>
      <div className="App-main container">
        <main className="container">
          <Layout/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
