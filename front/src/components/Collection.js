import React from 'react'
import PropTypes from 'prop-types';
import Styles from '../styles/components/collection.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap';

const Collection = ({ collection, activeCollection, index, handleToggle }) => (
  <div>
    {collection.recommends.map((recommend, index) => (
    <div className={Styles.collection_recommend}>
      <p className={Styles.collection_recommend_name}>{index+1}. {recommend.name}</p>
      <p className={Styles.collection_recommend_price}>{recommend.price}円</p>
      <p><a
          className={Styles.collection_recommend_shop}
          href={recommend.shop.googlemap_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recommend.shop.name}
      </a></p>
      <img src={recommend.reco_image} alt={recommend.reco_image} width={200} height={200} />
    </div>
  ))}
  </div>
  
)

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Collection