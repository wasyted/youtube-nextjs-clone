import SortIcon from '@mui/icons-material/Sort';

interface CommentsHeaderProps{
  commentsAmount: number;
}

export default function CommentsHeader({commentsAmount}: CommentsHeaderProps){
  return(
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-x-6">
        <p className="font-bold text-lg">{commentsAmount} comments</p>
        <button className="flex gap-x-2">
          <SortIcon />
          <p>Filter by</p>
        </button>
      </div>
    </div>
  )
}