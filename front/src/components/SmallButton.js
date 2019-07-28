import React from 'react'
import PropTypes from 'prop-types';

const preventEnterKey = () => {
  return window.event.keyCode === 13
}

const SmallButton = ({ text, dispatchClickAction }) => (
  <button
    onKeyPress={e => preventEnterKey()}
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
