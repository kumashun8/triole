import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'
import NewSelectedShop from '../containers/SelectedShop'

class App extends React.Component {
  render() {
    return (
      <div>
        <NewSelectedShop />
        <ShopSearchInput />
        <PredictedShopList />
      </div>
    );
  }
}

export default App