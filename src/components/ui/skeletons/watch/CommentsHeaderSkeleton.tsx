import SortIcon from '@mui/icons-material/Sort';

export default function CommentsHeader(){
  return(
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-x-6">
        <p className="w-54 dark:bg-neutral-600 animate-pulse rounded-full py-2 font-bold text-lg"></p>
        <button className="flex gap-x-2">
          <SortIcon />
          <p>Filter by</p>
        </button>
      </div>
    </div>
  )
}