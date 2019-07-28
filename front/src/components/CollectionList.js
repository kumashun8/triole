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

const CollectionList = ({ collections, dispatchToggleAction }) => {
  if (collections === void 0) {
    return(<div></div>)
  } 

  return (
    <div>
      <Headline title="コレクション一覧" />
      <Accordion className={Styles.collectionList}>
        {collections.map((collection, index) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle
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
                    handleToggle={dispatchToggleAction}
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