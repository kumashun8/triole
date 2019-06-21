import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'

class App extends React.Component {
  render() {
    return (
      <div>
        <ShopSearchInput />
        <PredictedShopList />
      </div>
    );
  }
}

export default App