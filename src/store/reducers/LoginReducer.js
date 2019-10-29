const userKey = 'Segredo!'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_FETCHED':
      if (action.payload) {
        localStorage.setItem(userKey, JSON.stringify(action.payload))
        return { ...state, user: action.payload, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, validToken: false, user: null }
      }
    default:
      return state
  }
}
