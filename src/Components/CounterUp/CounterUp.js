import { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

const CounterUp = () => {
  const [counters, setCounters] = useState([
    { icon: <FaUser className="text-yellow" />, count: 0, text: 'Students' },
    { icon: <FaChalkboardTeacher className="text-yellow" />, count: 0, text: 'Advisors' },
    { icon: <FaBuilding className="text-yellow-500" />, count: 0, text: 'Campuses' },
    { icon: <FaGraduationCap className="text-yellow" />, count: 0, text: 'Courses' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => prevCounters.map(counter => ({
        ...counter,
        count: counter.count < getMaxCount(counter.text) ? counter.count + 1 : counter.count
      })));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const getMaxCount = (text) => {
    switch (text) {
      case 'Students':
        return 1000;
      case 'Advisors':
        return 700;
      case 'Campuses':
        return 500;
      case 'Courses':
        return 1500;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-row w-full h-72 justify-center mt-20 mb-20 bg-blue">
      <div className="mx-20 w-auto gap-x-44 flex justify-center items-center">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col font-bold text-[40px] text-yellow items-center mx-4">
            {counter.icon}
            <p className="text-[30px] text-white font-bold">{counter.count}</p>
            <p className="text-gray-300 font-bold text-[25px]">{counter.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterUp;
