import React from 'react'
import NewSelectedShop from '../containers/NewSelectedShop'
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'

const ShopWrapper = () => (
  <div>
    <NewSelectedShop />
    <ShopSearchInput />
    <PredictedShopList />
  </div>
)

export default ShopWrapper
