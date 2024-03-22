const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-xl mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>

        <img
          className="w-20 h-20"
          src="https://i.ibb.co/FHv0hwf/4825.jpg"
          alt=""
        />
        <h1 className="text-bold text-xl lg:text-3xl ">Landing Page</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl px-1">
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
