import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">
        Welcome to Multi-Page React App 🚀
      </h2>
      <p className="text-gray-600 mb-6">
        This application demonstrates routing and dynamic pages using React Router.
      </p>

      <div className="space-x-4">
        <Link
          to="/about"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          About
        </Link>

        <Link
          to="/users"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default Home;
