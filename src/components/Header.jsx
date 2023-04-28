import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav
        className="bg-white border-gray-200 dark:bg-blue-900"
        data-te-navbar-ref
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"https://github.com/chicacode/kaftka-app"} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="kaftka Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              kaftka
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0"
            >
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out text-blue-100 hover:text-blue-700 focus:text-blue-700 disabled:text-black/30 dark:hover:text-fuchsia-200 "
                  to={"/"}
                  aria-current="page"
                >
                  Products
                </Link>
              </li>

              <li className="mb-2 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out text-blue-100 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-fuchsia-200 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  to={"/products/new"}
            
                >
                  Add new product &#43;
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out text-blue-100 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-fuchsia-200 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  to={"/cart"}
                >
                  Cart
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
