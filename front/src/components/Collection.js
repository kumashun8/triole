import React from 'react'
import PropTypes from 'prop-types';
import ActiveTagList from '../containers/ActiveTagList'
import Styles from '../styles/components/collection.module.scss'
import { Image } from 'react-bootstrap'

const Collection = ({ collection }) => (
  <div className={Styles.collection}>
    {collection.recommends.map((recommend, index) => (
      <div className={Styles.recommend}>
        <div className={Styles.recommend_text}>
          <p className={Styles.recommend_text_name}>{recommend.name}</p><br />
          <p className={Styles.recommend_text_price}>¥{recommend.price}</p>
          <p><a
              className={Styles.recommend_text_shop}
              href={recommend.shop.googlemap_link}
              target="_blank"
              rel="noopener noreferrer"
            >
            {recommend.shop.name} ({recommend.shop.prefecture})
          </a></p>
        </div>
        <Image
          src={recommend.reco_image}
          className={Styles.recommend_image}
          alt="Image"
          rounded />
      </div>   
    ))}
    <ActiveTagList tags={collection.tags}/>
  </div>
  
)

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Collection