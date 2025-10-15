// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX, FiUser, FiHome, FiInfo } from "react-icons/fi";

// function Header() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <>
//       {/* Top Navbar */}
//       <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
//                 JC
//               </div>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-800">Jarurat Care</h1>
//                 <p className="text-xs text-gray-500">Patient Records Dashboard</p>
//               </div>
//             </div>

//             {/* Desktop Nav */}
//             <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-600">
//               <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//               <Link to="/patients" className="hover:text-indigo-600 transition">Patients</Link>
//               <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
//             </nav>

//             {/* Mobile Menu Button */}
//             <div className="sm:hidden">
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-700 text-2xl focus:outline-none hover:text-indigo-600 transition"
//               >
//                 <FiMenu />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar (Right Slide-In) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-50 ${
//           sidebarOpen ? "translate-x-0" : "translate-x-full"
//         } sm:hidden`}
//       >
//         {/* Sidebar Header */}
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 flex items-center justify-between text-white rounded-tl-2xl">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-white text-indigo-600 flex items-center justify-center rounded-full font-bold text-sm shadow">
//               JC
//             </div>
//             <span className="font-semibold text-lg">Jarurat Care</span>
//           </div>
//           <button
//             onClick={toggleSidebar}
//             className="text-white text-2xl hover:text-yellow-300 transition"
//           >
//             <FiX />
//           </button>
//         </div>

//         {/* Sidebar Navigation */}
//         <nav className="p-5 space-y-4">
//           <Link
//             to="/"
//             onClick={toggleSidebar}
//             className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
//           >
//             <FiHome className="text-lg" /> Home
//           </Link>
//           <Link
//             to="/patients"
//             onClick={toggleSidebar}
//             className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
//           >
//             <FiUser className="text-lg" /> Patients
//           </Link>
//           <Link
//             to="/about"
//             onClick={toggleSidebar}
//             className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
//           >
//             <FiInfo className="text-lg" /> About
//           </Link>
//         </nav>

//         {/* Sidebar Footer */}
//         <div className="absolute bottom-0 w-full border-t p-4 text-center text-xs text-gray-500">
//           © 2025 Jarurat Care
//         </div>
//       </div>

//       {/* Backdrop (Blur + Fade) */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden transition-opacity duration-300"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Spacer for fixed header */}
//       <div className="h-20 sm:h-16" />
//     </>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiHome, FiInfo } from "react-icons/fi";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Fixed Navbar */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                JC
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">Jarurat Care</h1>
                <p className="text-xs text-gray-500">Patient Records Dashboard</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
              <Link to="/patients" className="hover:text-indigo-600 transition">Patients</Link>
              <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-700 text-2xl focus:outline-none hover:text-indigo-600 transition"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Top Dropdown Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 sm:hidden ${
          sidebarOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white text-indigo-600 flex items-center justify-center rounded-full font-bold text-sm shadow">
              JC
            </div>
            <span className="font-semibold text-lg">Jarurat Care</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl hover:text-yellow-300 transition"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="p-5 space-y-4 text-gray-700">
          <Link
            to="/"
            onClick={toggleSidebar}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            <FiHome className="text-lg" /> Home
          </Link>
          <Link
            to="/patients"
            onClick={toggleSidebar}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            <FiUser className="text-lg" /> Patients
          </Link>
          <Link
            to="/about"
            onClick={toggleSidebar}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            <FiInfo className="text-lg" /> About
          </Link>
        </nav>

        {/* Footer */}
        <div className="border-t text-center py-3 text-xs text-gray-500">
          © 2025 Jarurat Care
        </div>
      </div>

      {/* Backdrop with blur effect */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Spacer below fixed header */}
      <div className="h-20 sm:h-16" />
    </>
  );
}

export default Header;

