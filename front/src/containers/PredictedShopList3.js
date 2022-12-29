import { connect } from 'react-redux'
import ShopList from '../components/ShopList'
import { getShopDetail } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.shopList.length
  const currentState = state.shopList[length - 1]
  // console.log(state)
  return {
    shops: currentState.items[2] ? currentState.items[2] : []
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetShopDetail: place_id => dispatch(getShopDetail(place_id, 3))
})

const PredictedShopList3 = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList)

export default PredictedShopList3
