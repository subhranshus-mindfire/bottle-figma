import { motion, useScroll, useTransform } from "motion/react"
import BottleTop from "../assets/Bottle-Cap.png"
import BottleBottom from "../assets/Bottle-down.png"
import Logo from "../assets/30TOL logo.png"
import BottleWithHAnd from "../assets/22_1.png"
import { useEffect, useRef, useState } from "react"
import variety1 from "../assets/vaccume bottle.png"
import variety2 from "../assets/Fridge Bottles & Jugs 2.png"
import variety3 from "../assets/Borosilicate Bottles 3.png"
import variety4 from "../assets/wine.png"
import HeroLeft from "../assets/hero left.png"
import HeroRight from "../assets/hero right.png"
import Variety from "./Variety"
import Products from "./Products"
import Aboutus from "./Aboutus"
import FAQ from "./FAQ"
import Contact from "./Contact"
import Footer from "./Footer"

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({})
  
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const bottleTopY = isDesktop
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ? useTransform(scrollYProgress, [0, 0.185], [-50, 1150])
    : 0
  const bottleBottomY = isDesktop
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ? useTransform(scrollYProgress, [0, 0.185], [-350, 400])
    : 0

  const varieties: string[] = ["Vacuum Bottles", "Fridge Bottles & Jugs", "Borosilicate Bottles", "Kettles"]
  const varieties_icon: string[] = [variety1, variety2, variety3, variety4]

  return (
    <>
      <div className="flex flex-col justify-center items-center my-6 gap-8 overflow-x-hidden" ref={ref}>
        {/* Navbar */}
        <nav className='lg:h-[80px] flex justify-center lg:justify-between w-full lg:px-44'>
          <div className="left">
            <img src={Logo} alt="Logo" className="mt-2" />
          </div>
          <div className="right hidden md:block">
            {["Shop", "Contact Us", "About", "Journal", "Custom"].map((item: string) => {
              return (
                <button key={item} className="mx-8 text-[20px]">{item}</button>
              )
            })}
            <button className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white text-xl ms-14 mt-2 px-8 py-2 rounded-3xl">
              Inquiry Now
            </button>
          </div>
        </nav>

        {isDesktop && (
          <div className="absolute inset-0 top-40 z-50 -translate-y-36 lg:-translate-y-0">
            <motion.div
              className="bottle-top"
              initial={{ y: 200 }}
              animate={{ y: -50 }}
              transition={{ duration: 2.5, delay: 1 }}
              style={{ y: bottleTopY }}
            >
              <img src={BottleTop} alt="Bottle Top" className="m-auto scale-50 lg:scale-100" />
            </motion.div>
            <motion.div
              className="bottle-bottom"
              initial={{ y: -550 }}
              animate={{ y: -350 }}
              transition={{ duration: 2.5, delay: 1 }}
              style={{ y: bottleBottomY }}
            >
              <img src={BottleBottom} alt="Bottle Bottom" className="m-auto scale-50 lg:scale-100" />
            </motion.div>
          </div>
        )}

        <motion.div
          className="circle bg-gradient-to-b from-[#00D1FF] to-[#1A83FF] h-[600px] w-[600px] rounded-full p-2 absolute top-40"
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <motion.div
            className="bg-white rounded-full h-[582px]"
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 2 }}
          />
        </motion.div>

        <div className="z-40 mt-24">
          <div className="flex flex-col items-center mt-8">
            <motion.div initial={{ opacity: 0, y: -50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 3, delay: 1 }}>
              <div className="text-4xl md:text-6xl lg:text-[96px] font-medium text-center leading-tight">
                The Ultimate Companion <br /> for Hydration
              </div>
              <div className="text-lg md:text-[30px] text-center">
                We believe in the power of hydration. <br />
                Our mission is simple yet vital
              </div>
            </motion.div>
            <div className="flex justify-evenly w-screen">
              <motion.div initial={{ opacity: 0, scale: 0, x: -220, y: 50 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3, delay: 1 }} className="hidden lg:block">
                <img src={HeroLeft} alt="Hero Left" />
              </motion.div>
              <motion.button className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white text-xl mt-2 px-10 py-2 rounded-3xl h-12" initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}>
                Inquiry Now
              </motion.button>
              <motion.div initial={{ opacity: 0, scale: 0, x: 220, y: 50 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3, delay: 1 }} className="hidden lg:block">
                <img src={HeroRight} alt="Hero Right" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-66">
          <div className="bg-[#decac1] ">
            <img src={BottleWithHAnd} alt="BottleWithHAnd" className="w-[91%] h-full" />
          </div>
          <div className="bg-[#20292C]">
            <div className="flex flex-col justify-center items-center gap-14 h-screen">
              {varieties.map((variety: string, index: number) => (
                <Variety key={index} text={variety} icon={varieties_icon[index]} />
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <Products />
        {/* About Us */}
        <Aboutus />
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Hero
