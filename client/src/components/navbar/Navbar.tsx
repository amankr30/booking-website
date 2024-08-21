import { useState } from 'react';
import { Input } from '../ui/input';
import { RiArrowDropDownLine } from 'react-icons/ri';
import OpenSearchCity from './OpenSearchCity';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex justify-between w-full ">
        <div className="w-2/3 flex items-center">
          {/* <!-- Logo --> */}
          <div className="flex items-center mx-5">
            <Link to="/">
              <span className="font-semibold text-xl">
                book<span className="text-purple-700">my</span>show
              </span>
            </Link>
          </div>
          {/* <!-- Search Bar --> */}
          <div className="flex w-2/3 mx-2 ">
            <Input
              type="text"
              placeholder="Search for Events, Plays, Sports and Activities"
              className=""
            />
          </div>
        </div>
        {/* <!-- Location, Sign In, Menu --> */}
        <div className="flex items-center gap-5 space-x-4">
          <div
            onClick={handleClick}
            className="openCity flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm"
          >
            <span className="">Kolkata</span>
            <span>
              <RiArrowDropDownLine />
            </span>
          </div>
          <button className=" signinBtn bg-purple-700 cursor-pointer text-white px-3 py-1 rounded-lg">
            Sign In
          </button>
        </div>
      </nav>
      <div>
        <OpenSearchCity open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};
export default Navbar;
