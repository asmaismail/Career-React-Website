import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import { FiPlus, FiMinus } from 'react-icons/fi';
import Accordion from '../../Reuseables/Accordion'


const FAQ = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false, false, false, false]);

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
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
    <div className='overflow-x-hidden'>
      <Navbar />
      <Breadcrumb pageName="FREQUENTLY ASKED QUESTIONS" />
      <Accordion />

      <div className='flex flex-col gap-y-2 justify-center text-center'>
        <h1 className='font-bold text-blue text-[30px] mt-5'>DO YOU HAVE ANY QUESTIONS?</h1>
      </div>
      <div className='justify-center mt-7 lg:mx-60 mx-5 block'>
        <form>
          <div className='flex flex-col'>
            <div className='flex lg:flex-row flex-col lg:gap-x-12 gap-y-14 lg:gap-x w-full'>
              <div>
                <input
                  type="text"
                  placeholder="Your Name:"
                  className="w-full border rounded-lg py-5 px-72  appearance-none bg-white" autocomplete="off" required/>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Email:"
                  className="w-full border  rounded-lg py-5 px-72 appearance-none bg-white" autocomplete="off" required/>
 </div>
            </div>
            <div>    <textarea
              className="w-full border rounded-lg py-2 px-2 cols-5 mt-10"
              placeholder="Your message"
              rows="5"
              required
            /></div>
             <button
      type="submit"
      className="mt-3 bg-blue hover:bg-yellow hover:text-black flex justify-center items-center mx-auto text-white font-bold py-4 px-10"
    >
      Submit
    </button>
          </div>
        </form>
      </div>
    


      <Brand />
      <Footer />
      </div>

    </>
  );
};

export default FAQ;



