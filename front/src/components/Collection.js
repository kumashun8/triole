import React from 'react'
import PropTypes from 'prop-types';
import Styles from '../styles/components/collection.module.scss'

const Collection = ({ collection, index, handleToggle }) => (
  <li
    className={Styles.collectionWrapper}
  >
    {/* handleToggle(index+1) */}
    <div
      className={Styles.collection_preview}
      onClick={e => document.getElementById(index+1).style.display = "block"}
    >
      <div className={Styles.collection}>
        <h2 className={Styles.collection_title}>{collection.title}</h2>
        <p className={Styles.collection_description}>{collection.description}</p>
      </div>
    </div>

    <div
      className={Styles.collection_detail}
      id={index + 1}
      onClick={e => document.getElementById(index+1).style.display = "none"}
    >
      <div className={Styles.collection}>
        <h2 className={Styles.collection_title}>{collection.title}</h2>
        <p className={Styles.collection_description}>{collection.description}</p>
        <div className={Styles.collection_recommends}>
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
      </div>
    </div>


  </li>
)

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Collection