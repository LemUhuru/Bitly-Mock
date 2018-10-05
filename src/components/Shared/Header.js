import React, { Component } from 'react'
import Logo from '../../assets/svg/logo.svg'

const Header = () => {
  return (
    <header>
      <ul className="header-nav">
        <li><img src={Logo} alt="bitly logo" /></li>
        <li><a href="#">TOUR</a></li>
        <li><a href="#">ENTERPRISE</a></li>
        <li><a href="#">RESOURCES</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
    </header>
  )
}

export default Header
