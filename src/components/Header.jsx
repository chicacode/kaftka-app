import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav
        className="relative flex w-full items-center justify-end bg-white py-2 text-neutral-600 shadow-lg hover:text-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-neutral-200 md:flex-wrap md:justify-end"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-end px-3">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-blue-700 focus:text-neutral-700 dark:hover:text-fuchsia-200 dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>

          <div
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out text-blue-100 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-fuchsia-200 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  to={"/"}
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Products
                </Link>
              </li>
              
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    className="block transition duration-150 ease-in-out text-blue-100 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-fuchsia-200 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    to={"/products/new"}
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Add new product &#43;
                  </Link>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    className="block transition duration-150 ease-in-out text-blue-100 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-fuchsia-200 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    to={"/cart"}
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
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
