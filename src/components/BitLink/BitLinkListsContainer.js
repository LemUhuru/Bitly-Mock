import { connect } from 'react-redux'
import BitLinkLists from './BitLinkLists'

const mapStateToProps = state => {
  const { bitLink } = state
  const { bitLinks } = bitLink

  return {
    bitLinks,
  }
}

export default connect(
  mapStateToProps,
)(BitLinkLists)
