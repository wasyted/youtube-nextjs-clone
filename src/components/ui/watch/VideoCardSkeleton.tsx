import Link from "next/link";

export default function VideoCardSkeleton(){
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-start animate-pulse">
      <div className="bg-neutral-600 sm:rounded-md sm:max-w-44 w-full aspect-video">

      </div>
      <div className="mt-3 sm:mt-0 p-3 sm:p-0 flex items-center  gap-x-3 sm:block">
        <Link href={'/'} className="block sm:hidden aspect-square w-12 h-12 bg-white rounded-full"></Link>
        <div>
        <p className="text-xs bg-neutral-600 rounded-full h-4 w-52"></p>
          <div className="flex sm:block items-center mt-3">
            <p className="text-xs bg-neutral-600 rounded-full h-4 w-24 mt-3"></p>
            <p className="text-xs bg-neutral-600 rounded-full h-4 w-36 mt-3"></p>
          </div>
        </div>
      </div>
    </div>
  )
}