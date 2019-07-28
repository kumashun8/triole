import React from 'react'
import PropTypes from 'prop-types';
import Styles from '../styles/components/collection.module.scss'
import { Image } from 'react-bootstrap'

const Collection = ({ collection, activeCollection, index, handleToggle }) => (
  <div className={Styles.collection}>
    {collection.recommends.map((recommend, index) => (
      <div className={Styles.recommend}>
        <div className={Styles.recommend_text}>
          <p className={Styles.recommend_text_name}>{index+1}. {recommend.name}</p><br />
          <p className={Styles.recommend_text_price}>¥{recommend.price}</p>
          <p><a
              className={Styles.recommend_text_shop}
              href={recommend.shop.googlemap_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recommend.shop.name}
          </a></p>
        </div>
        <Image src={recommend.reco_image} alt={recommend.reco_image} rounded />
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