import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import image1 from '../../Assets/course-1.jpg'
import image2 from '../../Assets/course-2.jpg'
import image3 from '../../Assets/course-3.jpg'
import image4 from '../../Assets/course-4.jpg'
import image5 from '../../Assets/course-5.jpg'
import image6 from '../../Assets/course-6.jpg'
import image7 from '../../Assets/course-7.jpg'
import image8 from '../../Assets/course-8.jpg'
import image9 from '../../Assets/course-9.jpg'

const data = [
  {
    image: image1,
    title: "Business Studies",
    button: "Business",
    description: "Description 1",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image2,
    button: "Science",
    title: "Computer Engineering",
    description: "Description 2",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image3,
    button: "Education",
    title: "English for tomorrow",
    description: "Description 3",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image4,
    title: "Islamic Studies",
    button: "Business",
    description: "Description 1",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image5,
    button: "Science",
    title: "Elecrtical Engineering",
    description: "Description 2",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image6,
    button: "Design",
    title: "Web Full Development",
    description: "Description 3",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image7,
    title: "Business Studies",
    button: "Business",
    description: "Description 1",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image8,
    button: "Science",
    title: "Computer Engineering",
    description: "Description 2",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image9,
    button: "Education",
    title: "English for tomorrow",
    description: "Description 3",
    icon1: "icon1",
    icon2: "icon2",
  },
];


const Courses = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb pageName="Our Course"/>
    <div className="mx-20 flex flex-wrap mt-14">
      {data.map((item, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
            <img src={item.image} alt="item" className="w-full h-72 object-cover" />
            <div className="px-4 py-2">
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
            </div>
          </div>
        </div>

        
      ))}
    </div>

    

    <Brand/>  
     <Footer/>
    </>
  )
}

export default Courses
