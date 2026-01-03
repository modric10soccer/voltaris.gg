import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { getBlogPostBySlug } from "@/lib/blogs"
import { notFound } from "next/navigation"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export const runtime = "edge"


type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-12 md:pb-24 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl font-bold text-foreground mb-4 text-center">{post.title}</h1>
          <p className="text-muted-foreground text-center mb-8">Published on {post.publishedDate}</p>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>{post.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
              est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh egestas
              adipiscing.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
