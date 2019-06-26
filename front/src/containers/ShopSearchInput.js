import { connect } from 'react-redux'
import { getShopList } from '../actions/search'
import SearchInput from '../components/SearchInput'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  dispatchGetAction: text => dispatch(getShopList(text))
})

const ShopSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps
) (SearchInput)

export default ShopSearchInput

