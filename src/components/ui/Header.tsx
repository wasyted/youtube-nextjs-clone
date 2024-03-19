import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import YouTube from '@mui/icons-material/YouTube';
import KeyboardVoice from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import Notifications from '@mui/icons-material/NotificationsOutlined';
import Link from 'next/link';

export default function Header(){
  return(
    <header className='bg-white dark:bg-neutral-950 z-50 flex items-center justify-between sticky w-full top-0 left-0 right-0 p-2 gap-x-2 text-neutral-900 dark:text-neutral-300'>
      <div className='flex items-center gap-x-4 pl-4'>
        <button>
          <MenuIcon />
        </button>
        <Link href={'/'} className='flex items-center tracking-tighter'>
          <YouTube className='text-4xl text-red-600'/>
          <p className='relative text-white font-bold'>YouTube<span className='absolute ml-1 top-0 left-full text-xs'>clone</span></p>
          
        </Link>
      </div>
      <div className='w-full max-w-2xl flex items-center gap-x-4'>
        <div className='sm:flex hidden items-center rounded-full w-full border border-neutral-300 dark:border-neutral-700 overflow-hidden'>
          <input placeholder='Search' className='w-full bg-transparent px-4 py-1.5' type="text" />
          <button className='px-5 py-1.5 bg-transparent border-l dark:border-neutral-700 dark:bg-neutral-800/75'><SearchIcon /></button>
        </div>
        <div className='sm:dark:bg-neutral-800 sm:bg-neutral-200/75 h-10 w-10 aspect-square rounded-full items-center justify-center hidden sm:flex'>
          <KeyboardVoice />
        </div>
      </div>
      <div className='flex items-center sm:gap-x-7 gap-x-4 pr-4 '>
        <div className='block sm:hidden'>
          <SearchIcon className='text-2xl'/>
        </div>
        <div className='block sm:hidden'>
          <KeyboardVoice className='text-2xl'/>
        </div>
        <div>
          <VideoCallIcon className='text-2xl'/>
        </div>
        <div className='relative'>
          <Notifications className='text-2xl'/>
          <div className='px-1 absolute left-3 bottom-2 bg-red-600 text-white font-bold text-xs rounded-full border dark:border-neutral-900 border-lg'>9+</div>
        </div>
          <Link href={'/'} className="aspect-square w-8 h-8 bg-neutral-300/75 dark:bg-white rounded-full block"></Link>
      </div>
    </header>
  )
}