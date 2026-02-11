import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">
        About This App
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 text-gray-700 leading-relaxed">
        
        <p>
          This multi-page React application is developed to demonstrate the
          implementation of client-side routing using React Router. The project
          showcases how modern web applications can navigate between different
          pages without refreshing the browser.
        </p>

        <p>
          The application consists of multiple routes including a Home page,
          About page, Users listing page, and a dynamic User Detail page. Each
          route is configured using React Router, including parameterized
          routing to dynamically render user-specific information.
        </p>

        <p>
          One of the key features of this project is the use of nested routing
          and layout structure. The navigation bar remains persistent across all
          pages, providing a seamless and smooth user experience.
        </p>

        <p>
          Tailwind CSS is used for styling the application. It ensures a clean,
          modern, and responsive user interface. The design focuses on
          readability, spacing, and smooth hover transitions to enhance the
          overall user experience.
        </p>

        <p>
          This project also follows proper component structure and folder
          organization to maintain code quality and scalability. Functional
          components are used throughout the application for simplicity and
          clarity.
        </p></div> <br />


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
