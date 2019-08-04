import React from 'react';
import FormModal from '../containers/FormModal'
import CollectionIndex from '../containers/CollectionIndex'
import Styles from '../styles/components/app.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={Styles.app} id='app' onScroll={e => { console.log("Hoge") }}>
        <FormModal />
        <CollectionIndex />
      </div>
    );
  }
}

export default App