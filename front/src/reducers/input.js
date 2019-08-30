import { InputStatuses } from '../actions/input';
import { NewestOf } from '../containers/CollectionPostInput';

const initialState = {
  collection: {
    title: "",
    description: "",
    tags: "",
    images: [],
    shops: []
  }
};

export default (state = [initialState], action) => {
  const newCollection = NewestOf(state).collection || {};
  switch (action.type) {
    case InputStatuses.UPDATE_INPUT:
      newCollection[action.key] = action.value
      return [
        ...state,
        {
          collection: newCollection
        }
      ]
    case InputStatuses.CLEAR_INPUT:
      newCollection[action.key] = ""
      return [
        ...state,
        {
          collection: newCollection
        }
      ]
    case InputStatuses.CLEAR_ALL_INPUTS:
      return [
        ...state,
        {
          collection: {}
        }
      ]
    default:
      return state
  }
};