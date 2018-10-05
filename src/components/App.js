import React, { Component } from 'react'
import Header from './Shared/Header'
import Banner from './Banner'
import BitLinkLists from './BitLink/BitLinkListsContainer'
import { configBitlySDK } from '../config/configBitlySDK'

class App extends Component {
  componentDidMount() {
    console.log(process.env, 'process')
    const { REACT_APP_LOGIN, REACT_APP_API_KEY } = process.env
    
    configBitlySDK(REACT_APP_LOGIN, REACT_APP_API_KEY)
  } 

  render() {    
    return (
      <div className="app-container">
        <div className="presentation">
          <Header />
          <Banner />  
        </div>
       
        <BitLinkLists />
      </div>
    )
  }
}

export default App;
