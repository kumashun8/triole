import React from 'react';
import CollectionPostInput from '../containers/CollectionPostInput'
import CollectionIndex from '../containers/CollectionIndex'

class App extends React.Component {
  render() {
    return (
      <div>
        <CollectionPostInput />
        <CollectionIndex />
      </div>
    );
  }
}

export default App