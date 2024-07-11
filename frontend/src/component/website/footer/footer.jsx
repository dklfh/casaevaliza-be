import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="rounded-t-lg bg-bold">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
            <br></br>
            <ul className="flex flex-wrap items-center text-sm font-medium text-slate-300">
                <li>
                    <Link to="/link" className="hover:underline me-4 font-gothic md:me-6">Link</Link>
                </li>
                <li>
                    <Link to="/press" className="hover:underline me-4 font-gothic md:me-6">Press</Link>
                </li>
                <li>
                    <Link to="/sitemap" className="hover:underline me-4 font-gothic md:me-6">Sitemap</Link>
                </li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer