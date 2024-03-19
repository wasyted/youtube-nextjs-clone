'use client'

import { usePathname } from "next/navigation";

export default function Categories(){
  const currentUrl = usePathname()
  return(
    <div className={`${currentUrl === '/watch' ? 'hidden' : 'flex'} z-50 bg-white fixed dark:bg-neutral-900 w-full flex items-center justify-center py-2 text-sm gap-x-3`}>
      <div className="rounded-lg px-3 py-1.5 flex items-center justify-center bg-white text-neutral-800">
        All
      </div>
      <div className="rounded-lg px-3 py-1.5 flex items-center justify-center bg-neutral-700/75">
        Videogames
      </div>
      <div className="rounded-lg px-3 py-1.5 flex items-center justify-center bg-neutral-700/75">
        React
      </div>
      <div className="rounded-lg px-3 py-1.5 flex items-center justify-center bg-neutral-700/75">
        Music
      </div>
    </div>
  )
}