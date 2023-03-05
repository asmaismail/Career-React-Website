import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faBook } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineGlobal } from 'react-icons/ai'
import { RiPinterestLine } from 'react-icons/ri'


const CounterUp = () => {
  const [counterValues, setCounterValues] = useState([]);

  useEffect(() => {
    const initialValues = [
      { id: 'students', value: 1, max: 100, icon: AiOutlineGlobal },
      { id: 'courses', value: 1, max: 500, icon: AiOutlineGlobal },
      { id: 'students2', value: 1, max: 100, icon: AiOutlineGlobal },
      { id: 'courses2', value: 1, max: 500, icon: AiOutlineGlobal },
    ];
    setCounterValues(initialValues);
  }, []);

  const updateCounter = (id) => {
    setCounterValues(prevValues => {
      const index = prevValues.findIndex(val => val.id === id);
      const newVal = prevValues[index].value + 1;
      const newValues = [...prevValues];
      newValues[index] = { ...prevValues[index], value: newVal };
      return newValues;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center w-full mb-8">
        {counterValues.map(({ id, value, max, icon }) => (
          <div key={id} className="flex items-center justify-center mx-4">
            <div className="text-4xl font-bold">{value}</div>
            <div className="ml-2">
              <RiPinterestLine icon={icon} />
            </div>
            <div className="text-lg ml-2">{id}</div>
          </div>
        ))}
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => updateCounter('students')}>
        Update Satisfied Students
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => updateCounter('courses')}>
        Update Courses Complete
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => updateCounter('students2')}>
        Update Satisfied Students 2
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => updateCounter('courses2')}>
        Update Courses Complete 2
      </button>
    </div>
  );
};

export default CounterUp;
