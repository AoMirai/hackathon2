const initialState = {
  count: 0,
  countAction: 0,
}

const counter = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return {
      count: state.count + action.carbone,
      countAction: action.carbone,
    }
  }
  return state
}

export default counter