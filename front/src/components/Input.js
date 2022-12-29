import React from 'react';
import { Form } from 'react-bootstrap';

export default ({ dispatchUpdate, label, name, placeholder, rows = '1', as = 'input', type='input' }) => (
  <Form.Group controlId="formGroupText">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      placeholder={placeholder}
      rows={rows}
      as={as}
      type={type}
      onChange={e => {
        dispatchUpdate(name, e.target.value);
      }}
    />
  </Form.Group>
);