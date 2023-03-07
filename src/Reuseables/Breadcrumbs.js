// import React from 'react'
// import pic from '../Assets/pic.jpg'
 
// function Breadcrumb(props) {

//   function isLast(index) {
//     return index === props.crumbs.length - 1;
//   }

//   return (
//     <div className="w-full relative z-10">             
//       <img src={pic} alt='img'/>
//       <div  className='absolute z-10 top-10 w-full '>
//       <ol className="flex flex-row">
//         {
//           props.crumbs.map((crumb, ci) => {
//             const disabled = isLast(ci) ? 'disabled' : '';           
//             return (
//               <li
//                 key={ ci }
//                 className="flex justify-center items-center bg-red-500 w-full">
//                 <button className='text-white text-center text-[40px] flex justify-center font-bold ${ disabled } 'onClick={ () => props.selected(crumb) }>
//                   { crumb }
//                 </button>
//               </li>
//             );
//           })
//         }
//       </ol>
//       </div>
//     </div>
//   );
// }

// export default Breadcrumb;

