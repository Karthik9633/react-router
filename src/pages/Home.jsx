import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-5xl font-bold mb-6">
        Welcome to React Router Website
      </h2>
      <p className="text-gray-400 max-w-xl mb-8">
        This application demonstrates routing and dynamic pages using React Router.
      </p>

      <div className="space-x-4">
        <Link
          to="/about"
          className="border border-gray-500 px-6 py-3 rounded hover:border-white transition"
        >
          About
        </Link>

        <Link
          to="/users"
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition"
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default Home;
