import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black border-b border-gray-800 px-6 py-4">
            <div className="flex justify-between items-center">

                <h1 className="text-red-600 font-bold  
                       text-lg sm:text-xl md:text-2xl">
                ROUTER APP
                </h1>

                <div className="hidden md:flex space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-red-600 font-semibold"
                                : "hover:text-red-600 transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-red-600 font-semibold"
                                : "hover:text-red-600 transition"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            isActive
                                ? "text-red-600 font-semibold"
                                : "hover:text-red-600 transition"
                        }
                    >
                        Users
                    </NavLink>
                </div>
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 space-y-4 flex flex-col text-center bg-gray-900 py-4 rounded-lg">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-red-600 transition"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-red-600 transition"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/users"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-red-600 transition"
                    >
                        Users
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
