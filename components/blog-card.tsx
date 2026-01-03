import type { BlogPost } from "@/lib/blogs"
import { Box } from "lucide-react"

type BlogCardProps = {
  post: BlogPost
  isClickable?: boolean
}

export default function BlogCard({ post, isClickable = true }: BlogCardProps) {
  const content = (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-voltaris-red/50 cursor-pointer h-full flex flex-col">
      <div className="flex justify-center items-center mb-4 rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 h-[150px] w-full">
        <Box className="h-20 w-20 text-voltaris-red" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{post.description}</p>
      <p className="text-muted-foreground text-xs mt-4">Latest Version</p>
    </div>
  )

  return <div className="cursor-default">{content}</div>
}
