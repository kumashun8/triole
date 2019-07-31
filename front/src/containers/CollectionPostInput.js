import { connect } from 'react-redux'
import { postCollection } from '../actions/posting'
import { clearShopList } from '../actions/search'
import { clearSelectedShop } from '../actions/detail'
import { clearPreview } from '../actions/preview'
import { openForm, closeForm } from '../actions/form'
import PostingForm from '../components/PostingForm'

export const NewestOf = (state) => {
  const length = state.length
  return state[length - 1]
}

const mapStateToProps = state => {
  return {
    collection: NewestOf(state.post).collection,
    shops: NewestOf(state.selectedShop).shop,
    images: NewestOf(state.previews).images
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchPostAction: collection => dispatch(postCollection(collection)),
  dispatchClearShopList: index => dispatch(clearShopList(index)),
  dispatchClearSelectedShop: index => dispatch(clearSelectedShop(index)),
  dispatchClearPreview: index => dispatch(clearPreview(index))
})

const CollectionPostInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingForm)

export default CollectionPostInput