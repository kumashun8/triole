import React from 'react';
import FormModal from '../containers/FormModal'
import CollectionIndex from '../containers/CollectionIndex'
import IndexSpinner from '../containers/IndexSpinner'
import Styles from '../styles/components/app.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={Styles.app} id='app'>
        <FormModal />
        <CollectionIndex />
        <IndexSpinner />
      </div>
    );
  }
}

export default App