import { Link } from 'react-router-dom';
import Logo from '../icons/Logo.jsx';

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
      <Link to="/" className="hover:text-blue-400">
        Default
      </Link>
    </div>
  </nav>
);

export default NavBar;