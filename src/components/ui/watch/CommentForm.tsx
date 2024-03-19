import Link from "next/link"

export default function CommentForm(){
  return(
    <div className="flex items-center gap-x-3 w-full mt-4">
        <Link href={'/'} className="aspect-square w-10 h-10 bg-white rounded-full"></Link>
      <div className="w-full bg-transparent">
        <input className="py-1 w-full bg-transparent border-b border-neutral-600" type="text" placeholder="Leave a comment..."/>
      </div>
    </div>
  )
}