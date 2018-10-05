import React, { Component } from 'react'
import ShortenBar from './Input/ShortenBarContainer'

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h1>SHORTEN. SHARE. MEASURE.</h1>
        <p>Join Bitly, the world's leading link management platform.</p>
        <ShortenBar />
      </div>
    )
  }
}


export default Banner
