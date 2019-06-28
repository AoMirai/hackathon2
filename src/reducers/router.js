const initialState = {
  route: '/'
}

const router = (state = initialState, action) => {
  if (action.type === 'CHANGE_ROUTE') {
    return {
      route : action.route,
    }
  }
  return state
}

export default router;