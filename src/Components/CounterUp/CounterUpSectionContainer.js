// import { useState } from "react";

// function CounterUpSectionContainer() {
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [staffCount, setStaffCount] = useState(0);
//   const [campusesCount, setCampusesCount] = useState(0);
//   const [othersCount, setOthersCount] = useState(0);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="grid grid-cols-4 gap-4">
//         <div className="bg-gray-200 text-center py-4">
//           <h2 className="text-lg font-bold">Students:</h2>
//           <p className="text-4xl font-bold">{studentsCount}</p>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             onClick={() => setStudentsCount(studentsCount + 1)}
//           >
//             Increment
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
//             onClick={() => setStudentsCount(studentsCount - 1)}
//           >
//             Decrement
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
//             onClick={() => setStudentsCount(0)}
//           >
//             Reset
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <h2 className="text-lg font-bold">Staff:</h2>
//           <p className="text-4xl font-bold">{staffCount}</p>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             onClick={() => setStaffCount(staffCount + 1)}
//           >
//             Increment
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
//             onClick={() => setStaffCount(staffCount - 1)}
//           >
//             Decrement
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
//             onClick={() => setStaffCount(0)}
//           >
//             Reset
//           </button>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <h2 className="text-lg font-bold">Campuses:</h2>
//           <p className="text-4xl font-bold">{campusesCount}</p>
//         </div>
//         <div className="bg-gray-200 text-center py-4">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             onClick={() => setCampusesCount(campusesCount + 1)}
//           >
//             Increment
//           </button>
//           </div>
//           )

//           export default CounterUpSectionContainer
