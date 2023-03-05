import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import { FiPlus, FiMinus } from 'react-icons/fi';

// const FAQ = () => {
//   return (
//     <>
//     <Navbar/>
//       <Breadcrumb className='text-white font-bold' pageName="FREQUENTLY ASKED QUESTIONS" />
//       <Footer/>
//     </>
//   );
// };

// export default FAQ;
const FAQ = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar/>
//       <Breadcrumb className='text-white font-bold' pageName="FREQUENTLY ASKED QUESTIONS" />
    <div className="border border-gray-300 rounded-md mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <h3 className="font-medium text-gray-900">{title}</h3>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <div className="text-gray-700">{content}</div>
        </div>
      )}
    </div>
    </>
  );
};

export default FAQ;
