import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'
import ShopWrapper from '../components/ShopWrapper'

class App extends React.Component {
  render() {
    return (
      <div>
        <ShopWrapper />
        <ShopSearchInput />
        <PredictedShopList />
      </div>
    );
  }
}

export default App