
const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: action.id,
        user: action.user,
        text: action.text
      }

    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)  //Pourquoi undefined ?
      ]

    default:
      return state

  }
}

export default messages
