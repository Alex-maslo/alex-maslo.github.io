import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="relative inline-block group">
      <button className="bg-green-600 text-white px-4 py-4 text-lg font-medium border-none group-hover:bg-green-700">
        Dropdown
      </button>
      <div className="hidden absolute bg-gray-200 min-w-[160px] shadow-lg z-10 group-hover:block">
        <Link
          to="users"
          className="block text-black px-4 py-3 no-underline hover:bg-gray-300"
        >
          Users
        </Link>
        <Link
          to="posts"
          className="block text-black px-4 py-3 no-underline hover:bg-gray-300"
        >
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Menu;
