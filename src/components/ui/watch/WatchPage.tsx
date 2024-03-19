'use client'

import VideoItem from "@/interfaces/VideoItem";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CommentsHeaderSkeleton from "../skeletons/watch/CommentsHeaderSkeleton";
import VideoDescriptionSkeleton from "../skeletons/watch/VideoDescriptionSkeleton";
import VideoInteractionSkeleton from "../skeletons/watch/VideoInteractionSkeleton";
import VideoPlayerSkeleton from "../skeletons/watch/VideoPlayerSkeleton";
import VideoTitleSkeleton from "../skeletons/watch/VideoTitleSkeleton";
import CommentForm from "./CommentForm";
import CommentsHeader from "./CommentsHeader";
import Recommendations from "./Recommendations";
import VideoDescription from "./VideoDescription";
import VideoInteraction from "./VideoInteraction";
import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";

export default function WatchPage(){
  const videoUrlId = useSearchParams().get("id");
  const [item, setItem] = useState<VideoItem | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!videoUrlId) {
        setIsLoading(false);
        return; // If videoUrlId is not available, exit early
      }

      try {
        const response = await fetch("/videos.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const video = jsonData.videos.find((v: any)  => v.id === parseInt(videoUrlId));
        if (!video) {
          throw new Error('Video not found');
        }
        setItem(video);
        setIsLoading(false);
        console.log(video)
      } catch (error) {
        console.error(error);
        // Handle error state
        setIsLoading(false); // Ensure isLoading is set to false even if an error occurs
      }
    };

    fetchData();
  }, [videoUrlId]);
  return(
    <div className="flex items-start sm:p-4 lg:pl-8 pt-8 gap-x-4 xl:gap-x-6 lg:flex-row flex-col">
      <div className="w-full">
        {isLoading ? (
          <>
            <VideoPlayerSkeleton />
            <div className="p-4 sm:p-0">
              <div className="mt-3">
                <VideoTitleSkeleton />
                <VideoInteractionSkeleton />
              </div>
              <div className="mt-4 bg-neutral-200/75 dark:bg-neutral-700/50 rounded-xl p-3 min-h-24 flex items-start flex-col justify-between text-sm">
                <VideoDescriptionSkeleton />
              </div>
              <div className="mt-6 min-h-24 flex items-start flex-col justify-between text-sm">
                <CommentsHeaderSkeleton />
              </div>
            </div>
          </>
        ) : (
            <>
            {item && 
              <>
                <VideoPlayer video={item.video.thumbnail} />
                <div className="p-4 sm:p-0">
                  <div className="mt-3">
                    <VideoTitle title={item.video.title} />
                    <VideoInteraction userPicture={item.user.avatar} username={item.user.username} likes={item.video.likes} />
                  </div>
                  <div className="mt-4 bg-neutral-200/75 dark:bg-neutral-700/50 rounded-xl p-3 min-h-24 flex items-start flex-col justify-between text-sm">
                    <VideoDescription description={item.video.description} views={item.video.views} datePosted={item.video.upload_date} />
                  </div>
                  <div className="mt-6 min-h-24 flex items-start flex-col justify-between text-sm">
                    <CommentsHeader commentsAmount={item.video.comments} />
                    <CommentForm />
                  </div>
                </div>
              </>
            }
            </>
          )
        }
      </div>
      <Recommendations />
    </div>
  )
}