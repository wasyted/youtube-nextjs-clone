interface VideoTitleProps {
  title: string;
}

export default function VideoTitle({title}: VideoTitleProps){
  return(
    <h1 className="text-xl font-bold">
      {title}
    </h1>
  )
}