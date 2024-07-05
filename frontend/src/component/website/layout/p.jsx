import React from 'react'

function P({ children }) {
  return (
    <div>
      <div className='pb-12 pt-5 text-regular font-gothic leading-10 tracking-custom text-left max-sm:px-0'>
        {children}
      </div>
    </div>
  )
}

export default P
