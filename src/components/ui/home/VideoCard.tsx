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
    <div>
      <div className="overflow-hidden rounded-xl aspect-video flex items-center">
        <Link href={`/watch?id=${videoId}`}>
          <Image width={1920} height={1080} alt="thumbnail" src={thumbnail}></Image>
        </Link>
      </div>
      <div className="flex items-start justify-start gap-x-3 mt-2">
        <Link href={'/user'} className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
          <Image className="h-10 aspect-square" width={1920} height={1080} alt="thumbnail" src={userPicture}></Image>
        </Link>
        <div>
          <Link href={'/watch'}>
            <p className="text-sm">{title}</p>      
          </Link>
          <Link href={'/user'} className="text-sm text-neutral-400">
            <p>{username}</p>
          </Link>
          <p className="text-sm text-neutral-400">{views} views • {datePosted}</p>
        </div>
      </div>
    </div>
  )
}