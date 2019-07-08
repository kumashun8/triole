import React from 'react'
import PropTypes from 'prop-types'

const SelectedShop = ({ selectedShop, dispatchSelectCancel }) => {
  if (selectedShop === void 0) {
    return <div></div>
  }
  return (
    <div>
    <p>お店: <a href={selectedShop.url}>{selectedShop.name}</a></p>
    <button
      onClick={e => {
        e.preventDefault()
        dispatchSelectCancel()
      }}
    >
      ×
    </button>
  </div>
  )
}

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  dispatchSelectCancel: PropTypes.func.isRequired
}

export default SelectedShop
