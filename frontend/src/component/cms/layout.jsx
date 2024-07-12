import React from 'react'

function Layout({ children }) {
  return (
    <div>
      <div className='p-4 sm:ml-64 bg-slate-50 h-screen'>
        <div className='p-4 mt-14 flex flex-col gap-7'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Layout
