import React from 'react'
import PropTypes from 'prop-types'
import ShopOkuButton from '../containers/ShopOkButton'
import ShopOkuButton2 from '../containers/ShopOkButton2'
import ShopOkuButton3 from '../containers/ShopOkButton3'
import ShopCancellButton from '../containers/ShopCancellButton'
import ShopCancellButton2 from '../containers/ShopCancellButton2'
import ShopCancellButton3 from '../containers/ShopCancellButton3'

const SelectedShop = ({ selectedShop, index }) => {
  console.log(selectedShop)
  let buttons
  if (Object.keys(selectedShop).length === 0) {
    return <div></div>
  }
  switch (index) {
    case 1:
      buttons = (
        <div>
          <ShopCancellButton />
          <ShopOkuButton />
        </div>
      )
      break
    case 2:
      buttons = (
        <div>
          <ShopCancellButton2 />
          <ShopOkuButton2 />
        </div>
      )
      break
    case 3:
      buttons = (
        <div>
          <ShopCancellButton3 />
          <ShopOkuButton3 />
        </div>
      )
      break
    default:
      buttons = (<div></div>)
      break
  }
  return (
    <div>
      <a href={selectedShop.url}>{selectedShop.name}</a>
      {buttons}
    </div>
  )
}

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default SelectedShop
