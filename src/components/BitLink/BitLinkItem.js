import React, { Component } from 'react';
import clickIcon from '../../assets/svg/click-icon.svg';
import { copySelectedElement } from '../../helpers/utils';

class BitLinkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNotice: false,
    }
  }

  handleShortLinkClick = event => {
    const { target } = event
    copySelectedElement(target)
    this.setState({ displayNotice: true })
    setTimeout(() => {
      this.setState({ displayNotice: false })
    }, 500)
  }
  
  render() {
    const { bitLink: { title, shortUrl, longUrl, globalCount } } = this.props;
    const { displayNotice } = this.state

    return (
      <li className="bitlink-item">
        <div className="bitlink-item__header">
          <p className="bitlink-item__title">
            <a href="">{title || longUrl}</a>
          </p>

          <p className="bitlink-item__long-url">
            <a href="">{longUrl}</a>
          </p>
        </div>

        <div className="bitlink-item__footer">
          <p>
            <span className="bitlink-item__short-url" onClick={this.handleShortLinkClick}>{shortUrl}</span>
            <span className="bitlink-item__count">
              {globalCount}
              <img className="bitlink-item__click-icon" src={clickIcon} />
            </span>
          </p>
          { displayNotice && <p className="">Added to Clipboard.</p>}
        </div>
      </li>
    )
  }
}

export default BitLinkItem;
