import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">
        About This App
      </h2>

      <p className="text-gray-600 mb-6">
        This React application demonstrates multi-page routing,
        parameterized routes, and clean component structure.
      </p>

      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default About;
