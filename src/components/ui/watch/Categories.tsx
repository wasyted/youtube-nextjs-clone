import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Categories(){
  return(
    <div className="relative w-full p-2 sm:p-0 py-1.5 flex items-center justify-start gap-x-2 text-sm font-bold overflow-hidden mb-2 lg:mt-0 mt-3">
      <div className="bg-neutral-900 text-white dark:text-neutral-800 dark:bg-white rounded-lg px-3 py-1.5">
        All
      </div>
      <div className="bg-neutral-200/75 dark:bg-neutral-800 rounded-lg px-3 py-1.5">
        Music
      </div>
      <div className="bg-neutral-200/75 dark:bg-neutral-800 rounded-lg px-3 py-1.5">
        Travel
      </div>
      <div className="bg-neutral-200/75 dark:bg-neutral-800 rounded-lg px-3 py-1.5">
        Entertainment
      </div>
      <div className="bg-neutral-200/75 dark:bg-neutral-800 rounded-lg px-3 py-1.5">
        Cinema
      </div>
      <div className="bg-neutral-200/75 dark:bg-neutral-800 rounded-lg px-3 py-1.5">
        Food
      </div>
      <div className="absolute w-24 right-0 top-0 bottom-0 flex items-center justify-end bg-gradient-to-l dark:from-neutral-900 from-white to-transparent ">
        <button className='z-20 rounded-full hover:bg-neutral-600 flex items-center justify-center p-3'>
          <ArrowForwardIosIcon className='text-sm text-neutral-300'/>
        </button>
      </div>
    </div>
  )
}