import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from "next/link";
import { formatNumber } from '@/utils/format';
import Image from 'next/image';

export default function VideoInteraction({subscribers, username, likes, userPicture}: any){
  return(
    <div className="flex justify-between items-center w-full gap-y-4 flex-wrap">
      <div className="flex items-center justify-between gap-x-3 w-full sm:w-auto mt-2">
        <div className="flex gap-x-2">
          <div className="aspect-square w-10 h-10 bg-neutral-300/75 dark:bg-white rounded-full overflow-hidden">
            <Link href={'/user'}>
              <Image className="h-10 aspect-square" width={1920} height={1080} alt="thumbnail" src={userPicture}></Image>
            </Link>
          </div>
          <div className="flex items-center gap-x-2 sm:block">
            <Link href={'/'}>
              <p>
                {username}
                <span className="ml-2 sm:ml-0 text-xs dark:text-neutral-400 inline sm:block">{formatNumber(subscribers)} subscribers</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="ml-3">
          <button className="font-bold text-sm px-4 py-2 bg-neutral-950 text-white dark:bg-white hover:bg-neutral-300 dark:text-neutral-900 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="flex items-center bg-neutral-200/75 dark:bg-neutral-800 rounded-full overflow-hidden">
          <button className="hover:bg-neutral-700/75 flex items-center px-4 py-2 gap-x-2 border-r border-neutral-600">
            <ThumbUpOffAltIcon />
            <p className="w-max font-bold text-sm">{formatNumber(likes)}</p>
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