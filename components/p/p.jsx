
// import s from "../p/p.module.css";
// import { useState } from "react";//imported the useState hook
// import ff from "../../src/assets/css.png"

// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//     const handleNav = () => {
//       setNav(!nav);//change the state of the uploaded image container
//     };
//     return (
//       <>
//         <nav className=" text-white pt-8 flex justify-between items-center text-center m-0 p-10  overflow-hidden bg-black" >
//           <div>
//             <a className="text-4xl 2xl:text-5xl no-underline font-abc ">
//               FIXMATIC
//             </a>
//           </div>
//           {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
//           <div>
//             <ul className="hidden sm:flex list-none m-0 p-0 text-left  ">
//               <li className="mr-5 text-2xl hover:bg-slate-600  rounded-md px-3 py-2">
//                 <a href="/">Home</a>
//               </li>
//               <li className="mr-5 text-2xl hover:bg-slate-600  rounded-md px-3 py-2">
//                 <a href="/app">App</a>
//               </li>
//               <li className="mr-5 text-2xl hover:bg-slate-600  rounded-md px-3 py-2">
//                 <a href="/aboutUs">About us</a>
//               </li>
//             </ul>
//              {/* to change the icon when its in the small screen */}
//             <div onClick={handleNav} className="block sm:hidden">
//               {!nav ? <Menu size={20} /> : <X size={20} />}
//             </div>
//             <div
//               className={
//                 nav
//                   ? "fixed left-0 top-0 w-72 h-full bg-slate-900 border-r border-r-black-900 ease-in-out duration-500"
//                   : "fixed left-[-100%]"
//               }>
//                   {/* navigation bar for the small screen */}
//               <ul className="pt-4">
//                 <li>
//                   <a className="text-4xl no-underline mr-20 ">FIXMATIC</a>
//                 </li>
//                 <li className="p-4 border-b border-gray-400 pt- ">
//                   <a href="/"></a>
//                 </li>
//                 <li className="p-4 border-b border-gray-400 text-lg ">
//                   <a href="/">Home</a>
//                 </li>
//                 <li className="p-4 border-b border-gray-400 text-lg">
//                   <a href="/app">App</a>
//                 </li>
//                 <li className="p-4 border-b border-gray-400 text-lg">
//                   <a href="/aboutUs">About us</a>
//                 </li>
//                 <div></div>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   };

// export default P;