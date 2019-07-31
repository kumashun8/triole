import React, {useState} from 'react'
import Headline from './Headline'
import CollectionPostInput from '../containers/CollectionPostInput'
import {
  Modal,
  Button
} from 'react-bootstrap'

const MyModal = ({ dispatchOpen, dispatchClose, show }) => (
  <div>
    <Button onClick={e => {
      dispatchOpen()
      console.log(show)
    }}>
        投稿
    </Button>
    <Modal show={show} onHide={e => { dispatchClose() }}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Headline title="投稿フォーム" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CollectionPostInput />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={e => {dispatchClose()}}>閉じる</Button>
      </Modal.Footer>
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