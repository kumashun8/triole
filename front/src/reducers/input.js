import { InputStatuses } from '../actions/input';

const initialState = {
  inputtedDatas: {}
};

export default (state = [initialState], action) => {
  const newDatas = state.inputtedDatas || {};
  switch (action.type) {
    case InputStatuses.UPDATE_INPUT:
      newDatas[action.key] = action.value
      return [
        ...state,
        {
          inputtedDatas: newDatas
        }
      ]
    case InputStatuses.CLEAR_INPUT:
      newDatas[action.key] = ""
      return [
        ...state,
        {
          inputtedDatas: newDatas
        }
      ]
    case InputStatuses.CLEAR_ALL_INPUTS:
      return [
        ...state,
        {
          inputtedDatas: {}
        }
      ]
    default:
      return state
  }
};