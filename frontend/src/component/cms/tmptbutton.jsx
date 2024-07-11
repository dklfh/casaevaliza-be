import React from 'react'

function Tmptbutton({ children }) {
  return (
    <div>
      <div className='flex justify-end gap-3 mb-4'>
        {children}
      </div>
    </div>
  )
}

export default Tmptbutton
