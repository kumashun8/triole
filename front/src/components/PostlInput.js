import React from 'react'

const PostInput = ({ dispatchPostAction }) => {
  let input

  return (
    <div>
      <form>
        <input ref={node => { input = node }} />
        <button onClick={e => {dispatchPostAction(input)}}>OK</button>
      </form>
    </div>
  )
}

export default PostInput