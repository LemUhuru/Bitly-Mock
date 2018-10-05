import {
  ADD_BITLINK_SUCCESS,
  ADD_BITLINK_FAILURE,
  ADD_BITLINK_PENDING,
} from './types'

const INITIAL_STATE = {
  bitLinks:[],
}

function reducer(state=INITIAL_STATE, action = {}) {
  switch(action.type) {
    case ADD_BITLINK_SUCCESS:
      return {...state, bitLinks: [...state.bitLinks, action.payload]}
    case ADD_BITLINK_FAILURE:
      return state
    case ADD_BITLINK_PENDING:
      return state
    default:
      return state
  }
}



export default reducer
