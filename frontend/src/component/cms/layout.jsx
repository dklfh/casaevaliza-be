import React from 'react'

function Layout({ children }) {
  return (
    <div>
      <div className='p-4 sm:ml-64 bg-slate-50'>
        <div className='p-4 mt-14'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Layout
