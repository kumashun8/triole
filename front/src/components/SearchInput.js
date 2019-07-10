import React from 'react'

const SearchInput = ({ dispatchGetAction, index }) => {
  let input

  return (
    <div>
      <input
          placeholder="店舗名を検索"
          onChange={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchGetAction(input.value, index)
        }}
        ref={node => { input = node }}
      />
    </div>
  )
}

export default SearchInput