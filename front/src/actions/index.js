export const searchingShop = text => ({
  type: 'SEARCHING_SHOP',
  text
})

export const chooseShop = id => ({
  type: 'CHOOSE_SHOP',
  id
})

export const saveShop = placeid => ({
  type: 'SAVE_SHOP',
  placeid
})