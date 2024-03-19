'use client'

import { useEffect, useState } from "react";
import Categories from "./Categories";
import VideoCard from "../VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";
import {formatDate, formatNumber} from "@/utils/format"
import VideoItem from "@/interfaces/VideoItem";


export default function Recommendations(){
  const [data, setData] = useState<VideoItem[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/videos.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.videos);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchData();
  }, []);
  return(
    <div className="pl-0 lg:pr-8 w-full max-w-[400px] lg:max-w-[420px] gap-2 flex flex-col items-start justify-start overflow-hidden relative mx-auto sm:mx-0">
      <Categories />
      {isLoading ? 
        <div className="flex flex-col gap-y-3">
          {[...Array(10)].map((_, index) => <VideoCardSkeleton key={index} />)}
        </div> : 
        <div className="flex flex-col gap-y-3">
          {data && Array.from(data).map((item, index) => (
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
          ))}
        </div>
      }
    </div>
  )
}