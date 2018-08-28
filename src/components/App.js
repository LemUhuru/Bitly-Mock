import React, { Component } from 'react';
import Header from './Header'
import bitlySDK from '../BitlySDK'

class App extends Component {
  render() {
    console.log('sdk', bitlySDK)

    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App;
