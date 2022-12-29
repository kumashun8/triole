export const FormStatuses = {
  OPEN_FORM: 'OPEN_FORM',
  CLOSE_FORM: 'CLOSE_FORM'
}

export const openForm = () => ({
  type: 'OPEN_FORM'
})

export const closeForm = () => ({
  type: 'CLOSE_FORM'
})