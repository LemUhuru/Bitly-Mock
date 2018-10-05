import React, { Component } from 'react'
import BitLinkItem from './BitLinkItem'

const BitLinkLists = props => {
  const { bitLinks } = props

  const links = bitLinks.map((bitLink, index) => {
    return <BitLinkItem key={index} bitLink={bitLink} />
  })

  const isLinks = links.length > 0

  return (
    <div>
      {isLinks && <ul className="bitlink-list">{links}</ul>}
    </div>
   
  )

}

export default BitLinkLists
