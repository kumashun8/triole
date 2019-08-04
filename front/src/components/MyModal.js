import React from 'react'
import Headline from './Headline'
import CollectionPostInput from '../containers/CollectionPostInput'
import Styles from '../styles/components/myModal.module.scss'
import {
  Modal,
  Button
} from 'react-bootstrap'



const MyModal = ({ dispatchOpen, dispatchClose, dispatchScrolling, dispatchNotScrolling, show, isScrolling }) => {
  let timeoutId;

  window.addEventListener("scroll", () => {
    clearTimeout(timeoutId)
    dispatchScrolling()
    timeoutId = setTimeout(() => {
      dispatchNotScrolling()
    }, 500)
  })

  console.log(isScrolling)
  return (
    <div className={Styles.myModal}>
      <Button
        onClick={e => { dispatchOpen() }}
        className={ isScrolling ?
          Styles.myModal_openButton_disable :
          Styles.myModal_openButton
        }
      >
        <i class="fas fa-plus"></i>
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