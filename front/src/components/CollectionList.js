import React from 'react'
import PropTypes from 'prop-types'
import Collection from './Collection'
import Headline from './Headline'
import Styles from '../styles/components/collectionList.module.scss'

const CollectionList = ({ collections, dispatchToggleAction }) => {
  if (collections === void 0) {
    return(<div></div>)
  } 

  return (
    <div>
      <Headline title="コレクション一覧" />
      <ul className={Styles.collectionList}>
        {collections.map((collection, index) => (
          <Collection
            key={index}
            index={index}
            collection={collection}
            handleToggle={dispatchToggleAction}
          />
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
  ).isRequired
}

export default CollectionList