import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { AuthContext } from "../../../Provider/AuthProvider";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const { user, logOut } = useContext(AuthContext)
  const handlelogOut = () => {
    logOut()
  }
  return (
    <div>
      <div className="navbar bg-base-100 px-[7%] -mt-[5rem] fixed z-50 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600   text-lg'
            } to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600   text-lg'
            } to="/all-classes">All Classes</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600  text-lg'
            } to="/techto-letsskillup">Tech on LetsSkillUp</NavLink></li>
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="" />
            <Link to='/' className="cursor-pointer text-[#313273] lg:text-[2rem] font-medium">LetsSkillUp</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-8 menu-horizontal px-1">
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600   text-lg'
            } to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600   text-lg'
            } to="/all-classes">All Classes</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? 'font-medium text-[#FF922F]  border-b-2 text-lg' : 'font-medium text-gray-800 hover:text-gray-600  text-lg'
            } to="/techto-letsskillup">Tech on LetsSkillUp</NavLink></li>

          </ul>
        </div>
        <div className="navbar-end">

          {
            user ? <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                  <Avatar
                    variant="circular"
                    size="md"
                    alt="tania andrew"
                    className="border border-gray-900 p-0.5"
                    src={user?.photoURL}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="p-1 bg-white hover:bg-white">
                <MenuItem
                  onClick={closeMenu}
                  className="bg-white hover:bg-white"
                >

                  <Typography
                    as="span"
                    variant="small"
                  className="bg-none cursor-default text-black text-center"
                  >
                    {user?.displayName}
                  </Typography>

                  <Link to='/dashboard'>
                  <Typography
                    as="span"
                    variant="small"
                  className="text-black btn btn-ghost pt-2 text-lg mt-3 hover:text-red-800  "
                  >
                    DashBoard
                  </Typography>
                  </Link>


                  <Link to='/login'>
                  <Typography
                    as="span"
                    variant="small"
                  className="text-black btn btn-ghost pt-2 text-lg mt-3 hover:text-red-800  "
                  onClick={handlelogOut}
                  >
                    Log Out
                  </Typography>
                  </Link>


                </MenuItem>
              </MenuList>
            </Menu>

              :

              <NavLink className="text-black text-lg font-semibold" to="/login">Sign In</NavLink>
          }

        </div>
      </div>

    </div >
  );
};

export default Navbar;