const initialState = {
  route: '/'
}

const router = (state = initialState, action) => {
  console.log('router reducer')
  if (action.type === 'CHANGE_ROUTE') {
    console.log('router reducer if')
    return {
      route : action.route,
    }
  }
  return state
}

export default router;