import dotProp from 'dot-prop-immutable'

const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        id: action.id,
        name: action.name
      }

    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        user(undefined, action)
      ]

    case 'CHANGE_USERNAME':
      // Immutable update chats object
      return dotProp.set(state, `${action.id}.name`, action.name)

    default:
      return state

  }
}

export default users
