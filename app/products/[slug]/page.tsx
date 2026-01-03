import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ProductDetail from "@/components/product-detail"
import { getProductBySlug, products } from "@/lib/products"
import { notFound } from "next/navigation"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export const runtime = "edge"

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <ProductDetail product={product} allProducts={products} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
