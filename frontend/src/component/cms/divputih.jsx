import React from 'react'

function Divputih({ children }) {
  return (
    <div>
      <div className='bg-white rounded-2xl p-5 ring-1 ring-slate-300'>
        {children}
      </div>
    </div>
  )
}

export default Divputih
