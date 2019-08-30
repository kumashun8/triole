import React from 'react'
import NewSelectedShop from '../containers/NewSelectedShop'
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'

const ShopWrapper = i => (
  <div>
    <NewSelectedShop i={i} />
    <ShopSearchInput i={i} />
    <PredictedShopList i={i} />
  </div>
)

export default ShopWrapper
