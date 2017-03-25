
const chat = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return {
        id: action.id,
        user: action.user
      }

    default:
      return state

  }
}

const chats = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return [
        ...state,
        chat(undefined, action)  //Pourquoi undefined ?
      ]

    default:
      return state

  }
}

export default chats
