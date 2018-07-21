export default (state = [], action) => {
  switch(action.type) {
  case 'MAKE_GUESS':
    return [...state, action.payload]
  case 'RESET_GUESSES':
    return []
  default:
    return state
  }
}