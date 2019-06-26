import React from 'react'
import PropTypes from 'prop-types';

const OkButton = ({ dispatchOkAction }) => (
  <button onClick={e => dispatchOkAction() }>OK</button>
)

OkButton.propTypes = {
  dispatchOkAction: PropTypes.func.isRequired
}

export default OkButton
