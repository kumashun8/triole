import React from 'react';
import FormModal from '../containers/FormModal'
import CollectionIndex from '../containers/CollectionIndex'
import IndexSpinner from '../containers/IndexSpinner'
import TagInput from '../containers/TagInput'
import Styles from '../styles/components/app.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={Styles.app} id='app'>
        <FormModal />
        <CollectionIndex />
        <TagInput />
        <IndexSpinner />
      </div>
    );
  }
}

export default App