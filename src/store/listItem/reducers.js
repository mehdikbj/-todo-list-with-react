import types from '../../constants/todolist'

export const initialState = {
  listItems: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_FORM_TO_DO_DESCRIPTION:
      return {
        ...state,
        listItems: [
          ...state.listItems,
          {
            id: action.id,
            description: action.description,
          },
        ],
      }
    case types.DELETE_TO_DO_DESCRIPTION:
      return {
        ...state,
        listItems: [...state.listItems.filter(item => item.id !== action.id)],
      }

    default:
      return state
  }
}

export default reducer
