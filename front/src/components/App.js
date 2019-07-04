import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'
import ShopWrapper from '../components/ShopWrapper'
import CollectionPostInput from '../containers/CollectionPostInput'

class App extends React.Component {
  render() {
    return (
      <div>
        <ShopWrapper />
        <ShopSearchInput />
        <PredictedShopList />
        <CollectionPostInput />
      </div>
    );
  }
}

export default App