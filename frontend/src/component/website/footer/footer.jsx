import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="rounded-t-lg bg-bold">
        <div class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
            <br></br>
            <ul class="flex flex-wrap items-center text-sm font-medium text-slate-300">
                <li>
                    <a href="link.html" class="hover:underline me-4 font-gothic md:me-6">Link</a>
                </li>
                <li>
                    <a href="press.html" class="hover:underline me-4 font-gothic md:me-6">Press</a>
                </li>
                <li>
                    <a href="sitemap.html" class="hover:underline me-4 font-gothic md:me-6">Sitemap</a>
                </li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer