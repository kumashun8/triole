import { connect } from 'react-redux'
import ShopList from '../components/ShopList'

const mapStateToProps = (state) => {
  const length = state.shopList.length
  const currentState = state.shopList[length - 1]
  console.log(state)
  return { shops: currentState.items }
}



const PredictedShopList = connect(
  mapStateToProps
)(ShopList)

export default PredictedShopList
