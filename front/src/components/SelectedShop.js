import React from 'react'
import PropTypes from 'prop-types'

const SelectedShop = ({ selectedShop }) => (
  <div>
    <p><a href={selectedShop.url}>{selectedShop.name}</a></p>
  </div>
 
)

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default SelectedShop
