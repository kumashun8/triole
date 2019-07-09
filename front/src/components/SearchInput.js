import React from 'react'

const SearchInput = ({ dispatchGetAction, index }) => {
  let input

  return (
    <div>
      <form
        onChange={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchGetAction(input.value, index)
        }}
      >
        <input ref={node => { input = node }} />
      </form>
    </div>
  )
}

export default SearchInput