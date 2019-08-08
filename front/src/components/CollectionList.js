import React from 'react'
import PropTypes from 'prop-types'
import Collection from './Collection'
import CollectionHeader from './CollectionHeader'
import Headline from './Headline'
import Styles from '../styles/components/collectionList.module.scss'
import {
  Accordion,
  Button,
  Card
} from 'react-bootstrap'

const convertSpaceToHash = (tags = "") => {
  if (tags === "") {
    return ""
  }
  const newTags = tags.split(' ')
  if (newTags.length === 1) {
    return `#${newTags[0]}`
  }

  const formattedTags = newTags.map(tag => (
    tag === '' ? '#' : tag
  ))
  return formattedTags.join('')
}

const CollectionList = ({ collections, tag }) => {
  if (collections === void 0) {
    return(<div></div>)
  } 

  return (
    <div width="100vw">
      <Headline title="コレクション一覧" />
      <Headline title={convertSpaceToHash(tag)} />
      <Accordion className={Styles.collectionList}>
        {collections.map((collection, index) => (
          <Card>
            <Card.Header className={Styles.headerWrapper}>
              <Accordion.Toggle
                className={Styles.toggle}
                eventKey={index + 1}
                as={Button}
                variant="light"
              >
                <CollectionHeader collection={collection} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index+1}>
              <Card.Body>
                 <Collection
                    key={index}
                    index={index}
                    collection={collection}
                  />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
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