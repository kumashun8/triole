import { connect } from 'react-redux'
import { getShopList } from '../actions/search'
import SearchInput from '../components/SearchInput'

const mapStateToProps = state => ({
  index: 1,
  label: "お店",
  placeholder: "お店を検索"
})

const mapDispatchToProps = dispatch => ({
  dispatchGetAction: (text, index) => dispatch(getShopList(text, index))
})

const ShopSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps
) (SearchInput)

export default ShopSearchInput

