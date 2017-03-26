import dotProp from 'dot-prop-immutable'

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
        chat(undefined, action)
      ]

    case 'CHANGE_USERNAME':
      // Immutable update chats object
      return dotProp.set(state, `${action.id}.user`, action.user)

    default:
      return state

  }
}

export default chats
