import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Styles from '../styles/components/searchInput.module.scss'

const convertHashToSpace = (input) => {
  const tags = input.split('#')
  return tags.join(' ')
}

const SearchInput = ({ dispatchGetAction, index, label, placeholder }) => {
  let input

  const MyFormControl = () =>
    index < 10 ? (
      <Form.Control
        id={`searchInput${index}`}
        placeholder={placeholder}
        onChange={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchGetAction(input.value, index)
        }}
        ref={node => { input = node }}
      />
    ) : (
      <div className={Styles.myFormControl}>
        <Form.Control
          id={`searchInput${index}`}
          placeholder={placeholder}
          ref={node => { input = node }}
        />
        <Button
          className={Styles.myFormControl_button}
          onClick={e => {
            if (input.value !== "") {
              dispatchGetAction(convertHashToSpace(input.value))
            }
          }}
        >
          検索
        </Button>
        </div>
    )

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <MyFormControl />
    </Form.Group>
  )
}

export default SearchInput