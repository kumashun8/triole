import React from 'react';
import Styles from '../styles/components/header.module.scss'

const Header = () => (
  <header>
    <div className={Styles.header_menu}>
      <img src="../images/triole_icon.png" alt="triole" />
    </div>
  </header>
)

export default Header