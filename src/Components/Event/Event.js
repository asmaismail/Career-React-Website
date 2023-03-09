import React from "react";
// import { FaClock } from "react-icons/fa";
import img1 from '../../Assets/event-1.jpg'
import img2 from '../../Assets/event-3.jpg'
import img3 from '../../Assets/event-2.jpg'
import Breadcrumb from '../Breadcrumb/Breadcrumb'


const cards = [
  {
    image: img1,
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:img2,
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img3,
    title: "Card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img1,
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:img2,
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img3,
    title: "Card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

];
const Event = () => {
    return(
        <>
         <Breadcrumb pageName ="Our Events"/>
        {/* <Breadcrumb pageName="Our Blog"/> */}

<div className="mx-20 flex flex-wrap mt-14">
{cards.map((item, index) => (
  <div key={index} className="w-auto gap-x-5  md:w-1/2 p-4">
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full h-44 flex flex-row">
      <img src={item.image} alt="item" className="w-1/3 h-72 object-cover" />
      {/* <div className="px-4 py-2">
      <button className='bg-blue text-white hover:bg-yellow hover:text-black px-8 py-2 rounded-md mt-4'>{item.button}</button>
        <h2 className="font-bold mb-2 text-[30px] mt-5 text-blue hover:text-yellow">{item.title}</h2>
        <p className="text-gray-700 text-base mt-5">Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.</p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <div className="flex flex-row w-full justify-start">
                          <div className=''><h2 className='font-bold text-blue ml-14 hover:text-yellow text-[20px]'>View details</h2></div>
        </div>
      </div> */}
        <div className="w-full md:w-1/2 p-4 ">
          {/* <div className="flex gap-x-8  mb-4"> */}
            <div><button className="bg-yellow text-black py-2 px-4 rounded">
              Click me
            </button></div>
            {/* <div className="">
              <FaClock className="justify-right text-right" />
              <span className="text-blue font-bold text-lg">Business Conference</span>
            </div> */}
          {/* </div> */}
          <h3 className="text-lg font-bold mb-4">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
    </div>
  </div>

  
))}
</div>
</>
    );
};
// const Card = ({ image, title, description }) => {
//     return (
//       <div className="flex flex-row w-auto md:w-1/2 lg:w-1/2  bg-yellow mx-20 p-4">
//         <div className="w-full rounded-lg overflow-hidden m-5 bg-blue shadow-md">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-1/2">
//               <img className="w-full" src={image} alt={title} />
//             </div>
//             <div className="w-full md:w-1/2 p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <button className="bg-blue-500 text-black py-2 px-4 rounded">
//                   Click me
//                 </button>
//                 <div className="flex items-center">
//                   <FaClock className="mr-2" />
//                   <span>2 hours ago</span>
//                 </div>
//               </div>
//               <h3 className="text-lg font-bold mb-4">{title}</h3>
//               <p className="text-gray-700">{description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
// const Event = () => {
//   return (
//     <div className="flex flex-row w-1/2">
//       {cards.map((card) => (
//         <Card key={card.title} {...card} />
//       ))}
//     </div>

//   );
// };

export default Event;
