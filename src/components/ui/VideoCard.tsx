import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  autorId: number;
  videoId: number;
  thumbnail: string;
  title: string;
  username: string;
  userPicture: string;
  views: string | number;
  datePosted: string;
  category: string;
  comments: number;
  duration: number;
  description: string;
  likes: number;
  dislikes: number;
}

export default function VideoCard({autorId, videoId, dislikes, title, username, userPicture, views, datePosted, category, comments, duration, description, thumbnail, likes} : VideoCardProps) {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-start">
      <div className="sm:rounded-md sm:max-w-44 w-full aspect-video overflow-hidden aspect-video flex items-center">
        <Link href={`/watch?id=${videoId}`}>
          <Image width={1920} height={1080} alt="thumbnail" src={thumbnail}></Image>
        </Link>
      </div>
      <div className="mt-3 sm:mt-0 p-3 sm:p-0 items-center gap-x-3 sm:flex">
        <div>
          <Link href={`/watch?id=${videoId}`}>
            <p className="text-sm font-bold text-ellipsis">{title}</p>
          </Link>
          <div className="flex sm:block items-center">
            <Link href={`/user?id=${autorId}`}>
              <p className="text-xs dark:text-neutral-300">{username}</p>
            </Link>
            <p className="text-xs dark:text-neutral-300"><span className="mx-2 sm:mx-0 sm:hidden">•</span>{views} views<span className="hidden sm:inline"> • {datePosted}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}