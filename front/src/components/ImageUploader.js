import React from 'react';
import Styles from '../styles/components/imageUploader.module.scss';
import { Form, Button, Image } from 'react-bootstrap';
import format_image from '../utilities/format_image';

const ImageUploader = ({ images, dispatchUpdate, dispatchClear, i, name }) => {
  return (
    <Form.Group>
      <Form.Label>写真</Form.Label>
      <Form.Control
        type="file"
        accept=".jpg,.jpeg,.gif,.png"
        className={Styles.preview_input}
        onChange={e => {
          dispatchUpdate(name, format_image(e.target.files[0]))
        }}
      />
      <Image
        src={images[i].url}
        className={Styles.preview_image}
        alt="Image"
        rounded
      />
      <Button
        onClick={e => dispatchClear(name)}
        className={Styles.preview_clearButton}
      >
        クリア
      </Button>
    </Form.Group>
  );
  
}

export default ImageUploader