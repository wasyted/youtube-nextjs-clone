import Image from "next/image";

interface VideoPlayerProps {
  video: string;
}

export default function VideoPlayer({video} : VideoPlayerProps) {
  return (
    <div className="relative sm:rounded-xl aspect-video w-full lg:max-w-4xl xl:max-w-full overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          layout="fill"
          objectFit="cover"
          alt={'thumbnail'}
          src={video}
        />
      </div>
    </div>
  );
}