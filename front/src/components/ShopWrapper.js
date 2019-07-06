import React from 'react'
import NewSelectedShop from '../containers/NewSelectedShop'
import ShopOkButton from '../containers/ShopOkButton'

const ShopWrapper = (index) => (
  <div>
    <NewSelectedShop index={index}/>
    <ShopOkButton />
  </div>
)

export default ShopWrapper
