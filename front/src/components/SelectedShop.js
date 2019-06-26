import React from 'react'
import PropTypes from 'prop-types'

const SelectedShop = ({ selectedShop, dispatchSelectCancel }) => (
  <div>
    <p><a href={selectedShop.url}>{selectedShop.name}</a></p>
    <button onClick={e => dispatchSelectCancel() }>×</button>
  </div>
 
)

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  dispatchSelectCancel: PropTypes.func.isRequired
}

export default SelectedShop
