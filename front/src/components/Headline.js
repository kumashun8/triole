import React from 'react';
import Styles from '../styles/components/headline.module.scss';
import PropTypes from 'prop-types';

const Headline = ({ title }) => (
  <p className={Styles.headline}>{title}</p>
)

Headline.propTypes = {
  title: PropTypes.string.isRequired
}

export default Headline