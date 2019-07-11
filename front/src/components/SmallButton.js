import React from 'react'
import PropTypes from 'prop-types';

const SmallButton = ({ text, dispatchOkAction }) => (
  <button
    onClick={e => {
      e.preventDefault()
      dispatchOkAction()
    }}
  >
    {text}
  </button>
)

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  dispatchOkAction: PropTypes.func.isRequired
}

export default SmallButton
