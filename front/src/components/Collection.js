import React from 'react'
import PropTypes from 'prop-types';
import Styles from '../styles/components/collection.module.scss'

const Collection = ({ collection }) => (
  <li className={Styles.collectionWrapper}>
    <div className={Styles.collection}>
      <h2>{collection.title}</h2>
      {collection.recommends.map( recommend => (
        <div>
          <p>{recommend.name}</p>
          <p>{recommend.price}円</p>
          <p><a
              href={recommend.shop.googlemap_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recommend.shop.name}
          </a></p>
        </div>
      ))}
    </div>
  </li>
)

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Collection