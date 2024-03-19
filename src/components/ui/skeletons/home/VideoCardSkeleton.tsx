export default function VideoCardSkeleton() {
  return(
    <div>
      <div className="overflow-hidden rounded-xl  flex items-center dark:bg-neutral-600 animate-pulse">
        <div className="w-[1000px] aspect-video"></div>
      </div>
      <div className="flex items-start justify-start gap-x-3 mt-2">
        <div className="dark:bg-neutral-600 animate-pulse flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
        </div>
        <div>
          <div className="w-max text-transparent animate-pulse dark:bg-neutral-600 text-sm ">
            This is the title of the video - click here to watch
          </div>
          <p className="w-max text-transparent animate-pulse dark:bg-neutral-600 text-sm mt-1">999 views • 99 mont hago</p>
        </div>
      </div>
    </div>
  )
}