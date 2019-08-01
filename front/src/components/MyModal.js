import React, {useState} from 'react'
import Headline from './Headline'
import CollectionPostInput from '../containers/CollectionPostInput'
import Styles from '../styles/components/myModal.module.scss'
import {
  Modal,
  Button
} from 'react-bootstrap'

const MyModal = ({ dispatchOpen, dispatchClose, show }) => (
  <div className={Styles.myModal}>
    <Button
      onClick={e => { dispatchOpen() }}
      className={Styles.myModal_openButton}
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


// function MyModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


export default MyModal