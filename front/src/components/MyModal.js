import React from 'react'
import Headline from './Headline'
import CollectionPostInput from '../containers/CollectionPostInput'
import Styles from '../styles/components/myModal.module.scss'
import {
  Modal,
  Button
} from 'react-bootstrap'



const MyModal = ({ dispatchOpen, dispatchClose, dispatchScrolling, dispatchNotScrolling, dispatchClear,show, isScrolling }) => {
  let timeoutId;

  window.addEventListener("scroll", () => {
    clearTimeout(timeoutId)
    dispatchScrolling()
    timeoutId = setTimeout(() => {
      dispatchNotScrolling()
    }, 500)
  })

  return (
    <div className={Styles.myModal}>
      <Button
        onClick={e => {
          dispatchOpen()
          for (let i = 0; i < 3; i++) {
            dispatchClear(i)
          }
        }}
        className={ isScrolling ?
          Styles.myModal_openButton_disable :
          Styles.myModal_openButton
        }
      >
        <i className="fas fa-plus"></i>
      </Button>
      <Modal show={show} onHide={e => { dispatchClose() }}>
        <Modal.Header
          closeButton
          onClick={e => { dispatchClose() }}
          className={Styles.myModal_closeButton}
        >
          <Modal.Title>
            <Headline title="投稿フォーム" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollectionPostInput />
        </Modal.Body>
      </Modal>
    </div>
  )
}


export default MyModal