import { NavLink } from 'react-router-dom';
import Dropdown from '../base/Dropdown.jsx';
import Logo from '../icons/Logo.jsx';

const menuLinks = [
  { label: "fetchCancelToken", path: "/fetchCancelToken" },
  { label: "useCancelToken", path: "/useCancelToken" },
];

const NavBar = () => (
  <nav className="max-w-[1080px] m-auto flex justify-between items-center p-4">
    <div className="flex">
      <a
        href="#"
        onClick={
          () => window.location.reload()
        }
      >
        <Logo />
      </a>
    </div>
    <div className="flex gap-4 text-[#9b9ea1]">
      <NavLink 
        to="/" 
        className="hover:text-blue-400 navlink"
        >
        Home
      </NavLink>
      
      <Dropdown
        label="Cancel Methods"
        links={menuLinks}
      />
    </div>
  </nav>
);

export default NavBar;