import type { FC } from "react"

interface VarietyProps {
  text: string,
  icon: string
}

const Variety: FC<VarietyProps> = ({ text, icon }) => {
  return (
    <div className="flex gap-10 w-sm lg:w-xl items-center my-3 px-10">
      <img src={icon} alt={text} />
      <p className="text-white  text-lg lg:text-[40px]">
        {text}
      </p>
    </div>
  )
}

export default Variety