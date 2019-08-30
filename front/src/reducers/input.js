import { InputStatuses } from '../actions/input';
import { NewestOf } from '../containers/CollectionPostInput';

const initialState = {
  inputDatas: {}
};

export default (state = [initialState], action) => {
  const newDatas = NewestOf(state).inputDatas || {};
  switch (action.type) {
    case InputStatuses.UPDATE_INPUT:
      newDatas[action.key] = action.value
      return [
        ...state,
        {
          inputDatas: newDatas
        }
      ]
    case InputStatuses.CLEAR_INPUT:
      newDatas[action.key] = ""
      return [
        ...state,
        {
          inputDatas: newDatas
        }
      ]
    case InputStatuses.CLEAR_ALL_INPUTS:
      return [
        ...state,
        {
          inputDatas: {}
        }
      ]
    default:
      return state
  }
};