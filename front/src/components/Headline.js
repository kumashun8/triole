import React from 'react';
import Styles from '../styles/components/headline.module.scss';

const Headline = ({ title }) => (
  <p className={Styles.headline}>{title}</p>
)

export default Headline