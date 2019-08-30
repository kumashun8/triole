import React from 'react';
import { Form } from 'react-bootstrap';

export default ({ dispatchUpdate, label, key, placeholder, rows = '1', as = 'input' }) => (
  <Form.Group controlId="formGroupText">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      placeholder={placeholder}
      rows={rows}
      as={as}
      onChange={e => dispatchUpdate(key, e.target.value)}
    />
  </Form.Group>
);