import React from 'react'

const SearchInput = ({ dispatchGetAction }) => {
  let input

  return (
    <div>
      <form
        onChange={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchGetAction(input.value)
        }}
      >
        <input ref={node => { input = node }} />
      </form>
    </div>
  )
}

export default SearchInput