export const PreviewStatuses = {
  UPDATE_PREVIEW: 'UPDATE_PREVIEW',
  CLEAR_PREVIEW: 'CLEAR_PREVIEW'
}

export const updatePreview = (imageFile, index) => ({
  type: 'UPDATE_PREVIEW',
  imageFile,
  index
})

export const clearPreview = (index) => ({
  type: 'CLEAR_PREVIEW',
  index
})