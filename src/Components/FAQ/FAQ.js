import React, {useState} from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false, false, false, false]);

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      // close all other accordions
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false;
        }
      }
      return newState;
    });
  };

  return (
    <>
          <Navbar />
      <Breadcrumb pageName="FREQUENTLY ASKED QUESTIONS" />
      <div className="mx-20 mt-10">
        <div className="border-b border-gray-300">
          <div
            className="flex justify-between items-center p-4 cursor-pointer select-none"
            onClick={() => toggleAccordion(0)}
          >
            <h3 className="font-medium text-gray-900">Accordion Header 1</h3>
            <span className="text-gray-600">{isOpen[0] ? <FiMinus /> : <FiPlus />}</span>
          </div>
          {isOpen[0] && (
            <div className="p-4 border-t border-gray-300">
              <p className="text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.
At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.

              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex justify-between items-center p-4 cursor-pointer select-none"
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="font-medium text-gray-900">Accordion Header 2</h3>
            <span className="text-gray-600">{isOpen[1] ? <FiMinus /> : <FiPlus />}</span>
          </div>
          {isOpen[1] && (
            <div className="p-4 border-t border-gray-300">
              <p className="text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.
At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.

              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex justify-between items-center p-4 cursor-pointer select-none"
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="font-medium text-gray-900">Accordion Header 3</h3>
            <span className="text-gray-600">{isOpen[2] ? <FiMinus /> : <FiPlus />}</span>
          </div>
          {isOpen[2] && (
            <div className="p-4 border-t border-gray-300">
              <p className="text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.
At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.

              </p>
            </div>
          )}
        </div>
        </div>






    

   
<div className='flex flex-col gap-y-2 justify-center text-center'>
    <h1 className='font-bold text-blue text-[30px] mt-5'>DO YOU HAVE ANY QUESTIONS?</h1>
    </div>
<div className="justify-center mt-7 mx-60 block gap-x-4">
  <form className="flex flex-col md:flex-row md:items-center gap-x-9">
    <div className="flex-1 md:mr-3">
      <input
        type="email"
        placeholder="Email:"
        className="w-full border rounded-lg py-2 px-3 appearance-none bg-white"   autocomplete="off"

        required
      />
    </div>
    <div className="flex-1 md:ml-3">
      <input
        type="password"
        placeholder="Password:" 
        className="w-full border rounded-lg py-2 px-3 appearance-none bg-white"   autocomplete="off"

        required
      />
    </div>
    <div className="mt-3 md:mt-0">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign In
      </button>
    </div>
  </form>
  <form className="mt-5 block justify-center items-center">
    <textarea
      className="w-full border rounded-lg py-2 px-2 cols-5"
      placeholder="Your message"
      rows="5" 
      required
    />
    <button
      type="submit"
      className="mt-3 bg-blue hover:bg-yellow hover:text-black flex justify-center items-center mx-auto text-white font-bold py-4 px-10"
    >
      Submit
    </button>
  </form>
</div>



<Brand/>
<Footer/>

    </>
  );
};

export default FAQ;
