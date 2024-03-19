import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from "next/link";

export default function VideoInteraction(){
  return(
    <div className="flex justify-between items-center w-full gap-y-4 flex-wrap">
      <div className="flex items-center justify-between gap-x-3 w-full sm:w-auto mt-2">
        <div className="flex gap-x-2">
          <div className="aspect-square w-10 h-10 rounded-full overflow-hidden dark:bg-neutral-600 animate-pulse rounded-full">
            <Link href={'/user'}>
              <div className=''></div>
            </Link>
          </div>
          <div className="">
            <Link href={'/'}>
              <p className="mb-2 dark:bg-neutral-600 animate-pulse rounded-full text-transparent text-xs">Username</p>
            </Link>
            <p className="dark:bg-neutral-600 animate-pulse rounded-full text-transparent text-xs">99 subscribers</p>
          </div>
        </div>
        <div className="ml-3">
          <button className="font-bold text-sm px-4 text-transparent py-2 bg-neutral-600 animate-pulse rounded-full">
            subscribe
          </button>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="flex items-center bg-neutral-200/75 dark:bg-neutral-800 rounded-full overflow-hidden">
          <button className="hover:bg-neutral-700/75 flex items-center px-4 py-2 gap-x-2 border-r border-neutral-600">
            <ThumbUpOffAltIcon />
            <p className="w-max font-bold text-sm min-w-4"></p>
          </button>
          <button className="hover:bg-neutral-700/75 flex items-center border-neutral-600 pr-4 py-2 pl-2">
            <ThumbDownOffAltIcon />
          </button>
        </div>
        <button className="hover:bg-neutral-700/75 flex items-center bg-neutral-200/75 dark:bg-neutral-800 rounded-full px-4 py-2">
          <div className="flex items-center gap-x-2">
            <ShareIcon />
            <p className="w-max font-bold text-sm">Share</p>
          </div>
        </button>
        <button className="flex items-center bg-neutral-200/75 dark:bg-neutral-800 rounded-full px-2 py-2 hover:bg-neutral-700/75">
          <div className="flex items-center">
            <MoreHorizIcon />
          </div>
        </button>
      </div>
    </div>
  )
}