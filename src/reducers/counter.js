const initialState = {
  counter: 0
}

const counter = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return {
      counter: state.counter + action.carbone
    }
  }
  return state
}

export default counter