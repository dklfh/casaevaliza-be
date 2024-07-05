import React from 'react'
import { Link } from 'react-router-dom'

function Buttonmerah({ text, to }) {
  return (
    <div>
      <div>
        <Link to={to} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-gray-300 rounded-lg bg-red-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          {text}
        </Link>
      </div>
    </div>
  )
}

export default Buttonmerah
