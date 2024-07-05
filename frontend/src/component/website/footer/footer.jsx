import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="rounded-t-lg bg-bold">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
            <br></br>
            <ul className="flex flex-wrap items-center text-sm font-medium text-slate-300">
                <li>
                    <a href="link.html" className="hover:underline me-4 font-gothic md:me-6">Link</a>
                </li>
                <li>
                    <a href="press.html" className="hover:underline me-4 font-gothic md:me-6">Press</a>
                </li>
                <li>
                    <a href="sitemap.html" className="hover:underline me-4 font-gothic md:me-6">Sitemap</a>
                </li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer