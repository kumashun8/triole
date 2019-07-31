import React from 'react'
import Styles from '../styles/components/imageUploader.module.scss'
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
    <Image
      src={images.url}
      className={Styles.preview_image}
      alt="Image"
      rounded
    />
    <Button
      onClick={e => dispatchClear(i)}
      className={Styles.preview_clearButton}
    >クリア</Button>
  </Form.Group>
)

export default ImageUploader