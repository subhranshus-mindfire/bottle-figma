import bottle from "../assets/contact/bottle.png"

const Contact = () => {
  return (
    <div className="contact grid grid-cols-1 md:grid-cols-[40%_60%] bg-gradient-to-r from-[rgba(32,31,31,0.8)] to-[#201F1F] overflow-hidden">
      {/* Left - Image */}
      <div className="left flex justify-center md:block pt-10 md:pt-20">
        <img
          src={bottle}
          alt="bottle"
          className="w-60 md:w-auto -rotate-[-23.19deg] translate-y-10 md:translate-y-20 md:-translate-x-8"
        />
      </div>

      {/* Right - Form */}
      <div className="right p-6 md:p-20">
        <form className="pt-6 md:pt-10 text-white">
          <h1 className="text-2xl md:text-[40px] font-semibold leading-tight">Get in touch with us</h1>
          <h3 className="text-sm md:text-[14px] font-medium mb-6 md:mb-10">
            Hi, I'm Amanda. Need help? Use the form below or email <br className="hidden md:block" /> me at{" "}
            <span className="underline">hello@xyz.com</span>
          </h3>

          <div className="flex flex-col md:me-40 gap-3">
            <label>Name</label>
            <input
              type="text"
              placeholder="Rachel Joe"
              className="px-3 py-2 rounded-md text-black placeholder:text-[12px] outline-none placeholder:text-white"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Rachel@domain.com"
              className="px-3 py-2 rounded-md text-black placeholder:text-[12px] outline-none placeholder:text-white"
            />

            <label>Query</label>
            <textarea
              placeholder="Type your query here....."
              rows={4}
              className="px-3 py-2 rounded-md text-black placeholder:text-[12px] outline-none resize-none placeholder:text-white"
            />

            <button className="m-auto lg:m-0 bg-gradient-to-b w-32 md:w-40 from-[#4DFBFB] to-[#788EFF] px-2 py-2 rounded-full text-lg md:text-[20px] font-semibold text-white mt-6 md:mt-8">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
