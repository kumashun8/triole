import React from 'react'
import PropTypes from 'prop-types'

const Shop = ({ structured_formatting, place_id }) => (
  <li>
    <strong>{structured_formatting.main_text}</strong> : 
    {structured_formatting.secondary_text}
  </li>
)

Shop.propTypes = {
  shop: PropTypes.shape({
    structured_formatting: PropTypes.shape({
      main_text: PropTypes.string.isRequired,
      secondary_text: PropTypes.string.isRequired
    }).isRequired,
    place_id: PropTypes.string.isRequired
  })
}

export default Shop