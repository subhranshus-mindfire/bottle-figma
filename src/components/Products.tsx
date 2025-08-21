import ProductCard from "./ProductCard"
import img1 from "../assets/products/1.png"
import img2 from "../assets/products/2.png"
import img3 from "../assets/products/3.png"
import img4 from "../assets/products/4.png"
import img5 from "../assets/products/5.png"
import img6 from "../assets/products/6.png"

const Products = () => {
  const products: string[] = ["Rainbow 600", "Rio 650", "Big Bull 1300", "Rome 600", "Rainbow 600", "Sweetie 200"]
  const productImages: string[] = [img1, img2, img3, img4, img5, img6]

  return (
    <div className="w-full px-6 sm:px-10 lg:px-50 py-6">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-4 px-2 lg:px-10">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold leading-tight text-center md:text-left">
            Hydration Essentials
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal mt-1 text-center md:text-left">
            Discover Our Range of Premium Water Bottles
          </h3>
        </div>
        <div>
          <button className="bg-gradient-to-b from-[#4DFBFB] to-[#788EFF] px-6 sm:px-8 py-2 rounded-full text-base sm:text-lg lg:text-[20px] font-semibold text-white">
            VIEW MORE
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} text={product} image={productImages[index]} />
        ))}
      </div>
    </div>
  )
}

export default Products
