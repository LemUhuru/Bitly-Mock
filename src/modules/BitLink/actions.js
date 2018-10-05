import {
  ADD_BITLINK_SUCCESS,
  ADD_BITLINK_FAILURE,
  ADD_BITLINK_PENDING,
} from './types'

import { getShortURL, getTotalClicks } from '../../helpers/api'

export function addBitLinkSuccess(bitLink) {
  return {
    type: ADD_BITLINK_SUCCESS,
    payload: bitLink,
  }
}

export function addBitLinkFailure() {
  return {
    type: ADD_BITLINK_FAILURE,
  }
}

export function addBitLinkPending() {
  return {
    type: ADD_BITLINK_PENDING,
  }
}

export function addBitLink(bitLink) {
  return async dispatch => {
    dispatch(addBitLinkPending())
    let data = {}
      window.bitlySDK.shorten(bitLink)
      .then(response => {
        const { long_url, url } = response
        data.longUrl = long_url
        data.shortUrl = url

        return window.bitlySDK.clicks(url)
      })
      .then(response => {
        const { global_clicks } = response[0]
        const { shortUrl } = data
        data.globalCount = global_clicks

        return window.bitlySDK.info(shortUrl)
      })
      .then(response => {
        const { title } = response
        data.title = title
        dispatch(addBitLinkSuccess(data))
      })
      .catch(error => {
        dispatch(addBitLinkFailure(error))
      })
  }
}
