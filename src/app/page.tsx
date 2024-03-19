'use client'

import { useState, useEffect } from "react";
import VideoCard from "@/components/ui/home/VideoCard";
import VideoCardSkeleton from "@/components/ui/skeletons/home/VideoCardSkeleton";
import {formatNumber, formatDate} from "../utils/format";
import VideoItem from "@/interfaces/VideoItem";

export default function Home() {
  const [data, setData] = useState<VideoItem[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/videos.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.videos);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 pt-2 p-8 mt-14">
      {data ? ( Array.from(data).map((item, index) => (
        <VideoCard 
          key={index}
          username={item.user.username} 
          title={item.video.title}
          description={item.video.description}
          views={formatNumber(item.video.views)}
          datePosted={formatDate(item.video.upload_date)}
          category={item.video.category}
          comments={item.video.comments}
          likes={item.video.likes}
          dislikes={item.video.dislikes}
          duration={item.video.duration}
          thumbnail={item.video.thumbnail}
          userPicture={item.user.avatar}
          autorId={item.user.id}
          videoId={item.id}
        />
      ))) : (
        <>
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
        </>
      )
      }
    </div>
  );
}