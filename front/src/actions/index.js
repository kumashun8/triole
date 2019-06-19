export const searchingShop = (text) => ({
  type: 'SEARCHING_SHOP',
  text
})

export const chooseShop = listId => ({
  type: 'CHOOSE_SHOP',
  listId
})

export const saveShop = placeId => ({
  type: 'SAVE_SHOP',
  placeId
})