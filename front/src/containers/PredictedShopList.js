import { connect } from 'react-redux'
import ShopList from '../components/ShopList'
import { getShopDetail } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.shopList.length
  const currentState = state.shopList[length - 1]
  // console.log(currentState.items)
  return {
    shops: currentState.items[0]
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetShopDetail: place_id => dispatch(getShopDetail(place_id, 1))
})

const PredictedShopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList)

export default PredictedShopList
