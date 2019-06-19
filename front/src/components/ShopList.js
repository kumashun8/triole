import React from 'react'
import Shop from './Shop'
import PropTypes from 'prop-types';

const ShopList = (shops) => (
  <ul>
    {shops.map((shop, index) => (
      <Shop key={index} name={shop.description}/>
    ))}
  </ul>
)

ShopList.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ShopList