import React from 'react'
import PropTypes from 'prop-types'
import Collection from './Collection'
import Headline from './Headline'

const CollectionList = ({ collections, dispatchGetAction }) => {
  if (collections === void 0) {
    return(<div></div>)
  } 

  return (
    <div>
      <Headline title="コレクション一覧" />
      <ul>
        {collections.map((collection, index) => (
          <Collection key={index} collection={collection} />
        ))}
      </ul>
    </div>
    
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