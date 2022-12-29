import { connect } from 'react-redux'
import ShopList from '../components/ShopList'
import { getShopDetail } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.shopList.length
  const currentState = state.shopList[length - 1]
  return {
    shops: currentState.items[1] ? currentState.items[1] : []
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetShopDetail: place_id => dispatch(getShopDetail(place_id, 2))
})

const PredictedShopList2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList)

export default PredictedShopList2
