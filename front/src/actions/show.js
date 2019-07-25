export const ShowStatuses = {
  TOGGLE_POSTING_FORM: 'TOGGLE_POSTING_FORM',
  TOGGLE_COLLECTION_DETAIL: 'TOGGLE_COLLECTION_DETAIL'
}

export const togglePostingForm = () => ({
  type: 'TOGGLE_POSTING_FORM'
})

export const toggleCollectionDetail = (index) => ({
  type: 'TOGGLE_COLLECTION_DETAIL',
  index
})

