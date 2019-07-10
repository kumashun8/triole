import React from 'react';
import CollectionPostInput from '../containers/CollectionPostInput'
import CollectionIndex from '../containers/CollectionIndex'
import Styles from '../styles/components/app.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={Styles.app}>
        <CollectionPostInput />
        <CollectionIndex />
      </div>
    );
  }
}

export default App