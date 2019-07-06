import React from 'react'
import PropTypes from 'prop-types';

const OkButton = ({ dispatchOkAction }) => (
  <button
    onClick={e => {
      e.preventDefault()
      dispatchOkAction()
    }}
  >
    OK
  </button>
)

OkButton.propTypes = {
  dispatchOkAction: PropTypes.func.isRequired
}

export default OkButton
