import React from 'react'

function Section({ children }) {
  return (
    <div>
      <section className='my12'>
        {children}
      </section>
    </div>
  )
}

export default Section
