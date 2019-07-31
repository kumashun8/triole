import { connect } from 'react-redux'
import { postCollection } from '../actions/posting'
import { clearShopList } from '../actions/search'
import { clearSelectedShop } from '../actions/detail'
import { updatePreview, clearPreview } from '../actions/preview'
import PostingForm from '../components/PostingForm'

const mapStateToProps = state => {
  const length = state.post.length
  const currentState = state.post[length - 1]
  const length2 = state.selectedShop.length
  const currentState2 = state.selectedShop[length2 - 1]
  const length3 = state.previews.length
  const currentState3 = state.previews[length3 - 1]
  // console.log(currentState2)
  return {
    collection: currentState.collection,
    shops: currentState2.shop,
    previews: currentState3.previews
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchPostAction: collection => dispatch(postCollection(collection)),
  dispatchClearShopList: index => dispatch(clearShopList(index)),
  dispatchClearSelectedShop: index => dispatch(clearSelectedShop(index)),
  dispatchUpdatePreview: (index, imageUrl) => dispatch(updatePreview(index, imageUrl)),
  dispatchClearPreview: index => dispatch(clearPreview(index))
})

const CollectionPostInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingForm)

export default CollectionPostInput