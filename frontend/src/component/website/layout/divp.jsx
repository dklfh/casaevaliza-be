import React from 'react'

function Divp({ children }) {
  return (
    <div>
      <div className='py-12 mb-4 text-regular font-gothic leading-10 tracking-custom text-justify max-sm:px-0 dark:text-gray-400 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-bold dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start'>
      { children }
      </div>
    </div>
  )
}

export default Divp
