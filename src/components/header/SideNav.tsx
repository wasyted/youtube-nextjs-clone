'use client'

import { Home, SubscriptionsOutlined, TheatersOutlined, VideoLibraryOutlined } from "@mui/icons-material";
import { usePathname } from "next/navigation";

interface SideNavProps {
  isOpen: boolean;
  handleClick: VoidFunction;
}

export default function SideNav({isOpen, handleClick} : SideNavProps){
  const currentUrl = usePathname()
  return(
    <div className={`${currentUrl === '/watch' ? 'fixed' : 'sticky'} ${isOpen === false ? 'hidden' : 'flex'} z-50 top-0 left-0 bottom-0 dark:bg-neutral-900 mt-14 px-2 flex-col text-xs gap-y-6 py-6`}>
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