import React from 'react';
import Styles from '../styles/components/cover.module.scss'

const Cover = () => (
  <div className={Styles.cover} height={document.getElementById('app').style.height}>
  </div>
)

export default Cover