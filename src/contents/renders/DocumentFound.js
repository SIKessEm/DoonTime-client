import React from 'react'
import Header from '../widgets/MainHeader'
import Footer from '../widgets/MainFooter'
import './Main.scss'

class DocumentFound extends React.Component {

  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    const {Layout} = this.props

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

}
export default DocumentFound
