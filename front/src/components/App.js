import React from 'react';
import ShopSearchInput from '../containers/ShopSearchInput'
import ShopList from './ShopList'

class App extends React.Component {
  render() {
    return (
      <div>
        <ShopSearchInput />
        <ShopList />
      </div>
    );
  }
}

export default App