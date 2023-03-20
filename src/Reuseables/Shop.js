import React from 'react'
import { FaStar } from 'react-icons/fa';
import img1 from '../Assets/shop-1.jpg'
import img3 from '../Assets/shop-3.jpg'
import img5 from '../Assets/shop-5.jpg'
import img6 from '../Assets/shop-6.jpg'
const cardsData = [
    
      {
        id: 2,
        title: 'Graphics Design Book',
        description: 'Writer : Robert Cool',
        price: '$24.99',
        rating: 5,
        image: img5,
      },
      {
        id: 2,
        title: 'Web Development Book',
        description: 'Writer : Robert Cool',
        price: '$24.99',
        rating: 5,
        image: img6,
      },
      {
        id: 2,
        title: 'Web Development Book',
        description: 'Writer : Robert Cool',
        price: '$24.99',
        rating: 5,
        image: img1,
      },
      {
        id: 2,
        title: 'Graphics Design Book',
        description: 'Writer : Robert Cool',
        price: '$24.99',
        rating: 5,
        image: img3,
      },
     
     
  ];
  

const Shop = () => {
  return (
    <>
        <div className="flex flex-row flex-wrap mx-20 mt-20">
      {cardsData.map((card) => (
        <div key={card.id} className="w-full md:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-md">
            <img className="w-full cursor-pointer" src={card.image} alt={card.title} />
            <div className="p-4">
              <h2 className="text-lg font-medium">{card.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{card.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{card.price}</p>
                <div className="flex items-center">
                  {[...Array(card.rating)].map((star, index) => (
                    <FaStar key={index} className="text-yellow" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Shop
