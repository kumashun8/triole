import { InputStatuses } from '../actions/input';
import { NewestOf } from '../containers/CollectionPostInput';
import { defaultImage } from '../utilities/format_image';

const initialState = {
  collection: {
    title: "",
    description: "",
    tags: "",
    reco_image_1: defaultImage,
    reco_image_2: defaultImage,
    reco_image_3: defaultImage
  }
};

export default (state = [initialState], action) => {
  const newCollection = NewestOf(state).collection || {};
  console.log(newCollection);
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