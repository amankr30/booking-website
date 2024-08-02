import { Input } from "../../components/ui/input";


const Navbar = () => {
  const handleClick = () => { 
    console.log("clicked"); 
};
  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex justify-between w-full ">
        <div className="w-2/3 flex items-center">
          {/* <!-- Logo --> */}
          <div className="flex items-center mx-5">
            <span className="font-semibold text-xl">
              book<span className="text-red-500">my</span>show
            </span>
          </div>
          {/* <!-- Search Bar --> */}
          <div className="flex w-2/3 mx-2 ">
            {/* <input type="text" placeholder="Search for Events, Plays, Sports and Activities" className="w-2/3 p-2 border border-gray-300 rounded-lg outline-none" /> */}
            <Input
              type="text"
              placeholder="Search for Events, Plays, Sports and Activities"
              className=""
            />
          </div>
        </div>
        {/* <!-- Location, Sign In, Menu --> */}
        <div className="flex items-center gap-5 space-x-4">
          <div className="flex items-center gap-2">
            <span onClick={handleClick} className="cursor-pointer">Kolkata</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.08786 6.08783C4.24407 5.93162 4.49734 5.93162 4.65355 6.08783L7.8707 9.30498L11.0879 6.08783C11.2441 5.93162 11.4973 5.93162 11.6535 6.08783C11.8098 6.24404 11.8098 6.4973 11.6535 6.65351L8.22426 10.0828C8.029 10.2781 7.71241 10.2781 7.51715 10.0828L4.08786 6.65351C3.93165 6.4973 3.93165 6.24404 4.08786 6.08783Z"
                fill="#1A1A1A"
              ></path>
            </svg>
          </div>
          
          <button className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg">
            Sign In
          </button>
          {/* <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
