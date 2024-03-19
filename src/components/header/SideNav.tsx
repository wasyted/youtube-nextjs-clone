'use client'

import { Home, SubscriptionsOutlined, TheatersOutlined, VideoLibraryOutlined } from "@mui/icons-material";
import { usePathname } from "next/navigation";

export default function SideNav(){
  const currentUrl = usePathname()
  return(
    <div className={`${currentUrl === '/watch' ? 'hidden' : 'flex'} z-50 fixed bg-neutral-950 px-2 flex-col text-xs gap-y-6 py-6 h-full`}>
      <div className="text-center">
        <Home />
        <p className="mt-2">Home</p>
      </div>
      <div className="text-center">
        <TheatersOutlined />
        <p className="mt-2">Shorts</p>
      </div>
      <div className="text-center">
        <SubscriptionsOutlined />
        <p className="mt-2">Subscriptions</p>
      </div>
      <div className="text-center">
        <VideoLibraryOutlined />
        <p className="mt-2">You</p>
      </div>
    </div>
  )
}