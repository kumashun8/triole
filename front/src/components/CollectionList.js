import React from 'react'
import PropTypes from 'prop-types'
import Collection from './Collection'

const CollectionList = ({ collections, dispatchGetAction }) => {
  if (collections === void 0) {
    return(<div></div>)
  } 

  return (
    <ul>
      {collections.map((collection, index) => (
        <Collection key={index} collection={collection} />
      ))}
    </ul>
  )
}

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  dispatchGetAction: PropTypes.func.isRequired
}

export default CollectionList