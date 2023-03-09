import { FaReact } from 'react-icons/fa';
import img1 from '../Assets/home-1.png'
import img2 from '../Assets/home-2.png'


const cardData = [
  {
    id: 1,
    imageSrc: img1,
    title: 'Card Title 1',
    description: 'Card Description 1',
  },
  {
    id: 2,
    imageSrc: img2,
    title: 'Card Title 2',
    description: 'Card Description 2',
  },
 
];

function Card() {
  return (
    <div className="flex flex-col w-full md:w-1/3 p-4">
      <div className="flex flex-row">
        <div className="w-40%">
          <img src={imageSrc} alt="card image" className="w-full" />
        </div>
        <div className="flex flex-col w-60% pl-4">
          <div className="flex flex-row items-center mb-2">
            <FaReact className="mr-2" />
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
          <p className="text-sm">{description}</p>
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function Array() {
  return (
    <div className="flex flex-wrap">
      {cardData.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
export default Array;