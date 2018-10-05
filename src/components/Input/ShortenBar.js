import React, { Component } from 'react'
import validUrl from 'valid-url'

class ShortenBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      linkQuery: '',
      isError: false,
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const { addBitLink } = this.props
    const { linkQuery } = this.state

    if (validUrl.isUri(linkQuery)) {
      this.setState({ isError: false}, () => {
        addBitLink(linkQuery)
      })
    } else {
      this.setState({ isError: true })
    }
  }

  handleInputChange = event => {
    const { value } = event.target

    this.setState({ linkQuery: value })
  }

  render() {
    const { isError } = this.state

    return (
      <form onSubmit={this.handleFormSubmit} className="shorten-bar-form">
        <input
          onChange={this.handleInputChange}
          className="shorten-bar"
          type="text"
          placeholder="Paste a link to shorten it"
        />
        <input className="shorten-btn" type="submit" value="SHORTEN"/>
        {isError && <p className="error-msg">Incorrect Url Format</p>}
      </form>
    )
  }
}

export default ShortenBar
