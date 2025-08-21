import { type FC } from "react"

interface ProductProps {
  text: string
  image: string
}

const ProductCard: FC<ProductProps> = ({ text, image }) => {
  return (
    <div className="m-auto text-center lg:text-left">
      <img src={image} alt={text} className="rounded-2xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none" />
      <p className="text-xl sm:text-2xl lg:text-3xl mt-2">{text}</p>
      <button className="bg-gradient-to-r from-[#4DFBFB] to-[#788EFF] rounded-full text-base sm:text-lg lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-[36px] py-[7px] my-6 text-white">
        LEARN MORE
      </button>
    </div>
  )
}

export default ProductCard
