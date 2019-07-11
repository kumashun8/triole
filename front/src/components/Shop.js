import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../styles/components/shop.module.scss'

const Shop = ({ structured_formatting, place_id, handleClick }) => (
  <li
    className={Styles.shop}
    onClick={e => handleClick(place_id)}
  >
    <strong>{structured_formatting.main_text}</strong>
    <br />
    {structured_formatting.secondary_text}  
  </li>
)

Shop.propTypes = {
  shop: PropTypes.shape({
    structured_formatting: PropTypes.shape({
      main_text: PropTypes.string.isRequired,
      secondary_text: PropTypes.string.isRequired
    }).isRequired,
    place_id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  }).isRequired
}

export default Shop