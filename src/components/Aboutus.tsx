import BG from "../assets/aboutus/bg.png"
import BlurCard from "./BlurCard"

const Aboutus = () => {
  const features = [
    "Wide Mouth Bottles To Clean Easily.",
    "Insulated Bottles For Hot And Cold Technology",
    "Variation In Sizes, Styles, And Material",
    "Made In India To Serve Authenticity"
  ]

  return (
    <div
      className="bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 text-white gap-12 lg:gap-36 px-6 sm:px-12 lg:ps-50 lg:pe-30 py-12 lg:py-30"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="left">
        <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold">
          About Us
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-[24px] font-medium my-3">
          HEALTH, HAPPINESS, & SUSTAINABILITY
        </h3>
        <p className="text-base sm:text-lg lg:text-[20px] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap 
          into electronic typesetting, remaining essentially unchanged. It was popularised 
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
        </p>
        <button className="bg-gradient-to-r from-[#4DFBFB] to-[#788EFF] rounded-full text-base sm:text-lg lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-[36px] py-[7px] my-6 text-white">
          LEARN MORE
        </button>
      </div>

      <div className="right flex flex-col gap-6 sm:gap-8 lg:gap-10 ms-0 lg:ms-10 me-0 lg:me-60">
        {features.map((feature, index) => (
          <BlurCard key={index} text={feature} number={index} />
        ))}
      </div>
    </div>
  )
}

export default Aboutus
