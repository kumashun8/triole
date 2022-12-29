import React from 'react'
import Shop from './Shop'
import PropTypes from 'prop-types'

const ShopList = ({ shops, dispatchGetShopDetail }) => {
  if (shops.length === 0) {
    return (
      <div></div>
    )
  } else {
    return (
      <ul>
        {shops.map((shop, index) => (
          <Shop key={index} handleClick={dispatchGetShopDetail} {...shop} />
        ))}
      </ul>
    )
  }
}

ShopList.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        structured_formatting: PropTypes.shape({
          main_text: PropTypes.string.isRequired,
          secondary_text: PropTypes.string.isRequired
        }).isRequired,
        place_id: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  ).isRequired  
}

export default ShopList