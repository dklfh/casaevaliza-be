import React from 'react'

function H3({ text }) {
  return (
    <div>
      <h3 className='text-xl text-bold font-gothic font-extrabold tracking-wider border-b-2 py-3 border-bold'>
        { text }
      </h3>
    </div>
  )
}

export default H3
