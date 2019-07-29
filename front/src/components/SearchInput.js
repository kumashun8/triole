import React from 'react'
import { Form } from 'react-bootstrap'


const SearchInput = ({ dispatchGetAction, index }) => {
  let input

  return (
    <Form.Group>
      <Form.Label>お店</Form.Label>
      <Form.Control
        id={`searchInput${index}`}
        placeholder="お店を検索"
        onChange={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchGetAction(input.value, index)
        }}
        ref={node => { input = node }}
      />
    </Form.Group>
  )
}

export default SearchInput