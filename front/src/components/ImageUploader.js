import React from 'react'
import Styles from '../styles/components/postingForm.module.scss'
import {
  Form,
  Button,
  Image
} from 'react-bootstrap'

const ImageUploader = ({ images, dispatchUpdate, dispatchClear, i }) => (
  <Form.Group>
    <Form.Label>写真</Form.Label>
    <Form.Control
      type="file"
      onChange={e => {
        dispatchUpdate(e.target.files[0], i)
      }}
    />
    <Button onClick={e => dispatchClear(i)}>クリア</Button>
    <Image src={images.url} alt="Image" width="200px" height="200px" rounded/>
  </Form.Group>
)

export default ImageUploader