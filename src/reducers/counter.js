const initialState = {
  count: 0,
  countAction: 0,
}

const counter = (state = initialState, action) => {
  console.log('reducer counter')
  if (action.type === 'INCREMENT_COUNTER') {
    console.log('reducer if counter ' + state.count + ' ' + action.carbone)
    return {
      count: state.count + action.carbone,
      countAction: action.carbone,
    }
  }
  return state
}

export default counter