import React from 'react'
import PropTypes from 'prop-types'

const SelectedShop = ({ selectedShop, dispatchSelectCancel }) => {
  console.log(selectedShop)
  if (Object.keys(selectedShop).length === 0) {
    return <div></div>
  }
  return (
    <div>
      <a href={selectedShop.url}>{selectedShop.name}</a>
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
