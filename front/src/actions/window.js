export const WindowStatuses = {
  IS_SCROLLING: 'IS_SCROLLING',
  IS_NOT_SCROLLING: 'IS_NOT_SCROLLING'
}

export const isScrolling = () => ({
  type: 'IS_SCROLLING',
  isScrolling: true
})

export const isNotScrolling = () => ({
  type: 'IS_NOT_SCROLLING',
  isScrolling: false
})