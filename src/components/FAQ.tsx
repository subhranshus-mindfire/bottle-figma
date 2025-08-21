import { useState } from 'react';

const faqData = [
  {
    question: 'Where can I watch?',
    answer:
      'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum nulla cras porttitor titore ismod nulla.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum nulla cras porttitor titore ismod nulla.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum nulla cras porttitor titore ismod nulla.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum nulla cras porttitor titore ismod nulla.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 py-10 md:py-20 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg mx-0 md:mx-20">
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className={`flex flex-row items-start md:items-center justify-between pt-6 pe-4 md:pe-8 cursor-pointer ${openIndex === index ? '' : 'pb-6'
                } ${index > 0 ? 'border-t-2 md:border-t-6 border-gray-100' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex md:items-center flex-row gap-2 md:gap-4 w-full">
                <span className="text-3xl md:text-5xl font-bold px-2 md:px-10 py-2 md:py-7 text-gray-400">
                  0{index + 1}
                </span>
                <span className="text-lg my-auto md:my-0 md:text-[32px] font-semibold text-gray-900 leading-snug md:leading-normal">
                  {item.question}
                </span>
              </div>
              <button className="mt-2 md:mt-0 text-gray-400 focus:outline-none self-end md:self-auto">
                {openIndex === index ? (
                  <div className="p-2 md:p-3 rounded-full bg-gradient-to-r from-[#4DFBFB] to-[#788EFF] text-white font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                ) : (
                  <div className="p-2 md:p-3 bg-gray-100 rounded-full text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="px-2 md:px-6 pb-6 text-gray-900">
                <p className="pl-4 md:pl-28 text-base md:text-[20px]">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
