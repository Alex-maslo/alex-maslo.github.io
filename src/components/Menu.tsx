import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50     inline-block group">
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

        <Link
          to="recipes"
          className="block text-black px-4 py-3 no-underline hover:bg-gray-300"
        >
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Menu;
