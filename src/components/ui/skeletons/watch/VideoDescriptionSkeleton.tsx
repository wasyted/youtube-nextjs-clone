export default function VideoDescription(){
  return(
    <>
      <div className="flex justify-between items-center w-full text-sm">
        <div>
          <p className="text-transparent dark:bg-neutral-600 animate-pulse rounded-full w-max">999 views 99 days ago</p>
          <p className="mt-2 text-transparent dark:bg-neutral-600 animate-pulse rounded-full w-max">This is the video description displayed below the video.</p>
        </div>
      </div>
      <button>...More</button>
    </>
  )
}