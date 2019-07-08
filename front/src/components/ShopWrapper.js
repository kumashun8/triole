import React from 'react'
import NewSelectedShop from '../containers/NewSelectedShop'
import ShopOkButton from '../containers/ShopOkButton'
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'

const ShopWrapper = () => (
  <div>
    <NewSelectedShop />
    <ShopOkButton />
    <ShopSearchInput />
    <PredictedShopList />
  </div>
)

export default ShopWrapper
