import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle =
    "px-4 py-2 rounded-lg transition duration-300"

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">React Router App</h1>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-white text-indigo-600"
                  : "text-white hover:bg-white hover:text-indigo-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-white text-indigo-600"
                  : "text-white hover:bg-white hover:text-indigo-600"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-white text-indigo-600"
                  : "text-white hover:bg-white hover:text-indigo-600"
              }`
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
