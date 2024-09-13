import { CiSearch } from "react-icons/ci";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <a href="/" className="font-montserrat text-3xl font-semibold">
        FE.<span className="text-gray-300">shop</span>
      </a>
      <div className="flex items-center space-x-2 rounded-md bg-gray-200 px-2">
        <CiSearch className="text-xl" />
        <input
          type="search"
          placeholder="Search products, categories"
          className="w-full rounded-md bg-gray-200 py-2 text-sm text-gray-800 placeholder:text-sm focus:outline-none"
        />
      </div>
      <section className="tex-xl flex items-center space-x-8">
        <div className="flex flex-col">
          <FiShoppingBag className="self-center" />
          <p className="text-xs">Cart</p>
        </div>
        <div className="flex flex-col">
          <FiHeart className="self-center" />
          <p className="text-xs">Favorites</p>
        </div>
        <div className="flex flex-col">
          <FaRegCircleUser className="text-3xl" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
