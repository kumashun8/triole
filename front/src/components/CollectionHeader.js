import React from 'react'
import Styles from '../styles/components/collectionHeader.module.scss'

export const tagWithHash = (tags) => (
  tags.map(tag => '#' + tag + ' ')
)

const CollectionHeader = ({ collection }) => (
  <div className={Styles.collectionHeader}>
    <h2 className={Styles.collectionHeader_title}>{collection.title}</h2>
    <p className={Styles.collectionHeader_description}>{collection.description}<br/>{tagWithHash(collection.tags)}</p>
  </div>
)

export default CollectionHeader