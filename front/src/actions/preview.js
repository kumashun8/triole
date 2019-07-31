export const PreviewStatuses = {
  UPDATE_PREVIEW: 'UPDATE_PREVIEW',
  CLEAR_PREVIEW: 'CLEAR_PREVIEW'
}

export const updatePreview = (imageUrl, index) => ({
  type: 'UPDATE_PREVIEW',
  imageUrl,
  index
})

export const clearPreview = (index) => ({
  type: 'CLEAR_PREVIEW',
  index
})