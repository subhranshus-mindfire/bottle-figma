interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ index, question, answer, isOpen, onToggle }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between pt-6 pe-8 cursor-pointer ${
          isOpen ? '' : 'pb-6'
        } ${index > 0 ? 'border-t-6 border-gray-100' : ''}`}
        onClick={onToggle}
      >
        <div className='gap-4'>
          <span className='text-5xl font-bold px-10 py-7 inline-block text-gray-400'>
            0{index + 1}
          </span>
          <span className='text-[32px] font-semibold inline-block text-gray-900'>
            {question}
          </span>
        </div>
        <button className='text-gray-400 focus:outline-none'>
          {isOpen ? (
            <div className='p-3 rounded-full bg-gradient-to-r from-[#4DFBFB] to-[#788EFF] text-white font-semibold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </div>
          ) : (
            <div className='p-3 bg-gray-100 rounded-full text-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
              </svg>
            </div>
          )}
        </button>
      </div>
      {isOpen && (
        <div className='px-6 pb-6 text-gray-900'>
          <p className='pl-28 text-[20px]'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
