import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Styles from '../styles/components/smallButton.module.scss'

const preventEnterKey = () => {
  return window.event.keyCode === 13
}

const SmallButton = ({ text, dispatchClickAction }) => (
  <Button
    className={text==="x" ? Styles.cancel : Styles.enter }
    onKeyPress={e => preventEnterKey()}
    onClick={e => {
      e.preventDefault()
      dispatchClickAction()
    }}
  >
    {text}
  </Button>
)

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  dispatchClickAction: PropTypes.func.isRequired
}

export default SmallButton
