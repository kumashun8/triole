import React from 'react';
import Styles from '../styles/components/tagList.module.scss'

const TagList = ({ dispatchTagged, tags }) => (
  <ul className={Styles.tagList}>
    {tags.map(tag => (
      <li
        onClick={e => dispatchTagged(tag)}
        className={Styles.tagList_tag}
      >
        {`#${tag}`}
      </li>
    ))}
  </ul>
)

export default TagList