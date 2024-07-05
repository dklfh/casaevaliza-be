import React from 'react'

function Image({ src, alt }) {
  return (
    <div>
      <section>
        <img src={src} alt={alt} className='w-full h-lvh object-cover' />
      </section>
    </div>
  )
}

export default Image
