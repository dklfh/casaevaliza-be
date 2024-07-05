import React from 'react'

function H2({ text }) {
  return (
    <div>
      <h2 className='font-gothic text-bold text-4xl font-black tracking-wide hidden lg:block lg:text-4xl'>
        { text }
      </h2>
    </div>
  )
}

export default H2
