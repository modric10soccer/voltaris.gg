"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Check, ArrowRightLeft } from "lucide-react"
import { products, type Product } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"

export default function ProductComparison() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const toggleProduct = (product: Product) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id))
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const clearComparison = () => {
    setSelectedProducts([])
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full px-6 py-4 backdrop-blur-sm shadow-lg flex items-center gap-2"
        >
          <ArrowRightLeft className="h-5 w-5" />
          Compare Products
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Comparison Modal */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-auto">
          <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Compare Products
            </h2>
            <div className="flex items-center gap-2">
              {selectedProducts.length > 0 && (
                <Button onClick={clearComparison} variant="ghost" className="text-zinc-400 hover:text-white">
                  Clear All
                </Button>
              )}
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            {selectedProducts.length === 0 && (
              <p className="text-center text-zinc-400 py-12">Select up to 3 products to compare</p>
            )}

            {/* Product Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {products.map((product) => {
                const isSelected = selectedProducts.find((p) => p.id === product.id)
                const canSelect = selectedProducts.length < 3

                return (
                  <div
                    key={product.id}
                    onClick={() => (canSelect || isSelected) && toggleProduct(product)}
                    className={`relative cursor-pointer border rounded-xl p-4 transition-all ${
                      isSelected
                        ? "border-voltaris-red bg-voltaris-red/10"
                        : canSelect
                          ? "border-zinc-800 hover:border-zinc-700"
                          : "border-zinc-800 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-voltaris-red rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-sm font-bold text-white truncate">{product.name}</h3>
                    <p className="text-xs text-zinc-400">{product.category}</p>
                  </div>
                )
              })}
            </div>

            {/* Comparison Table */}
            {selectedProducts.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-zinc-800 bg-zinc-950 p-4 text-left text-white font-bold">Feature</th>
                      {selectedProducts.map((product) => (
                        <th key={product.id} className="border border-zinc-800 bg-zinc-950 p-4 text-center">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="w-20 h-20 object-cover rounded-lg mx-auto mb-2"
                          />
                          <p className="text-sm font-bold text-white">{product.name}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Category</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="border border-zinc-800 p-4 text-center text-white">
                          {product.category}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Status</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="border border-zinc-800 p-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                              product.status === "Undetected"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-yellow-500/20 text-yellow-500"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Starting Price</td>
                      {selectedProducts.map((product) => (
                        <td
                          key={product.id}
                          className="border border-zinc-800 p-4 text-center text-voltaris-red font-bold"
                        >
                          ${product.variants[0]?.price.toFixed(2)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Variants</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="border border-zinc-800 p-4 text-center text-white">
                          {product.variants.length} options
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Features</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="border border-zinc-800 p-4 text-left text-sm text-zinc-300">
                          {product.description.split("\n").slice(0, 5).join("\n")}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 p-4 text-zinc-400">Action</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="border border-zinc-800 p-4 text-center">
                          <Link href={`/products/${product.slug}`}>
                            <Button className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full backdrop-blur-sm">
                              View Product
                            </Button>
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
