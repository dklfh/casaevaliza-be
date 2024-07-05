import React from 'react'

function Div({ children }) {
  return (
    <div>
      <div className='px-24 xl:mx-28 md:py-0 lg:mx-8 lg:px-4 lg:py-12 md:mx-6 max-sm:px-8'>
        {children}
      </div>
    </div>
  )
}

export default Div
