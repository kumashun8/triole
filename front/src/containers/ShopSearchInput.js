import React from 'react'
import { connect } from 'react-redux'
import { getShopList } from '../actions'

class ShopSearchInput extends React.Component {

  render() {
    let input
    const { dispatchGetShopList } = this.props;
    return (
      <div>
        <form
          onChange={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatchGetShopList(input.value)
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

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  dispatchGetShopList: text => dispatch(getShopList(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ShopSearchInput)

