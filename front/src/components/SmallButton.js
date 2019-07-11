import React from 'react'
import PropTypes from 'prop-types';

const SmallButton = ({ text, dispatchClickAction }) => (
  <button
    onClick={e => {
      e.preventDefault()
      dispatchClickAction()
    }}
  >
    {text}
  </button>
)

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  dispatchClickAction: PropTypes.func.isRequired
}

export default SmallButton
