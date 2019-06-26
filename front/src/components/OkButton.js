import React from 'react'
import PropTypes from 'prop-types';
import Shop from './Shop';

const OkButton = (handleClick) => (
  <button onClick={e => handleClick()}>OK</button>
)

Shop.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default OkButton
