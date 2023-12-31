import Image from "next/image"
import Review from "./[handle]/Review"

import type { BasicProduct } from "@/lib/shopify/types"

export default function ProductCard({ product }: { product: BasicProduct }) {
  return (
    <div className="bg-primary-600 group relative duration-500 shadow-2xl shadow-black hover:shadow hover:shadow-secondary-400 overflow-hidden rounded-md">
      <div className="relative bg-gray-200 overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          width={200}
          height={200}
          className="object-cover min-[400px]:w-[384px] min-[400px]:h-[400px] w-full h-full"
        />
      </div>
      <div className="p-5 space-y-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm text-accent-100">
              <a href={`/products/${product.handle}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-accent-100 sm:text-base">
            ${product.price}
          </p>
        </div>
        <p className="text-sm text-secondary-600">Available</p>
        <Review rate={5} />
      </div>
    </div>
  )
}
