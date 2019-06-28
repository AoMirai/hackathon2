const initialState = {
  route: '/'
}

const router = (state = initialState, action) => {
  if (action.type === 'CHANGE_ROUTE') {
    console.log(action.route)
    return {
      route : action.route,
    }
  }
  return state
}

export default router;