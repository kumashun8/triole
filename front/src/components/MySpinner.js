import React from 'react'
import { Spinner } from 'react-bootstrap'
import Styles from '../styles/components/mySpinner.module.scss'

const MySpinner = ({ loadIsFinished }) => (
  <Spinner
    animation="border"
    className={ loadIsFinished ? Styles.mySpinner : Styles.mySpinner_hide}
    id="spinner">
  </Spinner>
)

export default MySpinner