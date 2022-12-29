import React from 'react';
import Styles from '../styles/components/header.module.scss'
import logo from '../images/triole_logo.png'

const Header = () => (
  <header className={Styles.header}>
    <div className={Styles.header_menu}>
      <img
        className={Styles.header_menu_home}
        onClick={e => window.location.reload() }
        src={logo}
        alt="Triole" />
    </div>
  </header>
)

export default Header