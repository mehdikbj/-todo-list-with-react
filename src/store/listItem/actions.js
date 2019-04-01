import types from '../../constants/todolist'

let idListDescription = 0

const nextId = () => {
  idListDescription += 1
  return idListDescription
}

const actions = {
  addDescription(description) {
    return {
      type: types.SUBMIT_FORM_TO_DO_DESCRIPTION,
      id: nextId(),
      description,
    }
  },
  deleteDescription(id) {
    return {
      type: types.DELETE_TO_DO_DESCRIPTION,
      id,
    }
  },
}

export default actions
