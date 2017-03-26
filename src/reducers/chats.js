const chat = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return {
        id: action.id,
        userid: action.userid
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
        chat(undefined, action)
      ]

    default:
      return state

  }
}

export default chats
