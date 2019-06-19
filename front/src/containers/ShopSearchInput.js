import React from 'react'
import { connect } from 'react-redux'
import { searchingShop } from '../actions'

class ShopSearchInput extends React.Component {

  render() {
    let input
    const { dispatchSearchingShop } = this.props;
    return (
      <div>
        <form
          onChange={e => {
            e.preventDefault()
            dispatchSearchingShop(input.value)
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({ shopList: state.shopList })
  dispatch => ({dispatchSearchingShop: text => dispatch(searchingShop(text))})
)(ShopSearchInput)
