export default interface VideoItem{
  user: {
    username: string;
    avatar: string;
    id: number;
  };
  video: {
    title: string;
    description: string;
    views: number;
    upload_date: string;
    category: string;
    comments: number;
    likes: number;
    dislikes: number;
    duration: number;
    thumbnail: string;
  };
  id: number;
}

export interface Video{
  video: {
    title: string;
    description: string;
    views: number;
    upload_date: string;
    category: string;
    comments: number;
    likes: number;
    dislikes: number;
    duration: number;
    thumbnail: string;
  };
}

export interface User{
  user: {
    username: string;
    avatar: string;
    id: number;
  };
}