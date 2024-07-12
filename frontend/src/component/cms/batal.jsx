import React from 'react'
import { useNavigate } from 'react-router-dom'

function Batal() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className='text-black bg-blue-50 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium tracking-wide rounded-lg w-auto px-5 py-2 text-sm text-center'>
        BACK
      </button>
    </div>
  )
}

export default Batal
