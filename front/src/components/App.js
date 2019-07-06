import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'
import ShopWrapper from '../components/ShopWrapper'
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