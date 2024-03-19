import { formatNumber, formatDate } from "@/utils/format";

interface ViewsDescriptionProps {
  views: number;
  datePosted: string;
  description: string;
}

export default function VideoDescription({views, datePosted, description}:ViewsDescriptionProps){
  return(
    <>
      <div className="flex justify-between items-start w-full flex-col">
        <div>
          <p className="font-bold">{formatNumber(views)} views {formatDate(datePosted)}</p>
        </div>
        <p>{description}</p>
      </div>
      <button>...More</button>
    </>
  )
}