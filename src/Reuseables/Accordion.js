import React, { useState } from 'react';
const accordionData = [
    {
      title: 'Accordion Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '
      
    },
    {
      title: 'Accordion Item 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '

    },
    {
      title: 'Accordion Item 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '

    },
    {
        title: 'Accordion Item 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '
        
      },
      {
        title: 'Accordion Item 5',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '
  
      },
      {
        title: 'Accordion Item 6',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio eaque rerum Provident similique accusantium nemo autemVeritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquanihil eveniet aliquid culpa officia aut! Impedit sit sunt quaeratodittenetur error harum nesciunt ipsum debitis quas aliquid. Reprehenderitquia Quo neque error repudiandae fuga? Ipsa laudantium molestias eos '
  
      },
  
  ];
  
function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-auto lg:mx-20 mx-5 mt-10">
    {accordionData.map((item, index) => (
      <div
        key={index}
        className=" border-b border-blue w-auto  mb-4 "
      >
        <button
          className="flex justify-between items-center px-4 py-3 w-full text-left font-medium text-black bg-gray-200 hover:bg-gray-200 focus:outline-none"
          onClick={() => handleClick(index)}
        >
          <span>{item.title}</span>
          <svg
            className={`w-5 h-5 transition-transform transform ${
              activeIndex === index ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 15z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {activeIndex === index && (
          <div className="px-4 py-3 border-t border-gray-300">
            <p className="text-black">{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
}

    
export default Accordion;
