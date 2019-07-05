import React from 'react'
import PropTypes from 'prop-types';

const Collection = ({ collection }) => (
  <li>
    <h2>{collection.title}</h2>
  </li>
)

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Collection