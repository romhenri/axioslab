import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Dropdown = ({ label, links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isSomeActive = (location, links) => {
    return links.some((link) => link.path === location.pathname);
  };

  const getActive = (location, links) => {
    return links.find((link) => link.path === location.pathname
    );
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${isSomeActive(location, links) 
          ? "hover:text-blue-400 border border-blue-400 text-blue-400" 
          : "border border-transparent"}
          p-2 rounded w-36`}
      >
        {getActive(location, links)?.label || label}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-indigo-50 border rounded shadow-lg">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-gray-700 hover:bg-[#dbebff] ${
                  isActive ? "border border-[#388dd3]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
