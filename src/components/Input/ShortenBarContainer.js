import ShortenBar from './ShortenBar'
import { connect } from 'react-redux'
import { addBitLink } from '../../modules/BitLink/actions'


const mapStateToProps = state => {
  const { bitLink } = state

  return {
    bitLink,
  }
}

const mapDisptachToProps = dispatch => {
  return {
    addBitLink: link => dispatch(addBitLink(link))
  }
}

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(ShortenBar)
