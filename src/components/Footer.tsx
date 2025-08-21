import Logo from "../assets/White Logo.png"

const Footer = () => {
  return (
    <>
      <div className="bg-[#201F1F] p-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between w-full md:px-28 gap-6 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="h-[50px] md:h-[60px]" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            {["Shop", "Contact Us", "About", "Journal", "Custom"].map((item: string) => (
              <button
                key={item}
                className="text-[16px] md:text-[20px] text-white hover:text-[#4DFBFB] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between w-full md:px-28 items-center gap-6 md:gap-0 mt-12">
          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: "fa-facebook-f" },
              { icon: "fa-instagram" },
              { icon: "fa-x-twitter" },
            ].map((social, idx) => (
              <div
                key={idx}
                className="w-[34.5px] h-[34.5px] text-white bg-[#535353] flex justify-center items-center rounded-full hover:bg-[#4DFBFB] transition"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </div>
            ))}
          </div>

          {/* Policies */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-center">
            {["FAQ's", "Returns", "Ordering", "Shipping", "Personalization Policies"].map((item: string) => (
              <button
                key={item}
                className="text-[14px] md:text-[20px] text-white hover:text-[#4DFBFB] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <footer className="bg-[#323232] text-[#858585] text-center py-4 text-sm md:text-base">
        Copyright &copy; 2023 BOTOL. All Rights Reserved.
      </footer>
    </>
  )
}

export default Footer
