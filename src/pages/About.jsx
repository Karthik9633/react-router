import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-6 py-16">
      
      <div className="max-w-4xl w-full text-center">
        
        
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-10">
          About This Website
        </h2>

        <div className="bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl p-10 space-y-6 text-gray-300 ">
          
          <p>
            This multi-page React application is built to demonstrate the power
            of client-side routing using React Router. It allows seamless
            navigation between pages without refreshing the browser, creating a
            smooth and modern user experience.
          </p>

          <p>
            The application includes multiple routes such as Home, About,
            Users, and a dynamic User Detail page. Parameterized routing is
            implemented to dynamically render user-specific data based on URL
            parameters.
          </p>

          <p>
            A persistent navigation bar ensures smooth transitions between
            pages while maintaining a consistent layout structure throughout
            the application.
          </p>

          <p>
            The interface is styled using Tailwind CSS with a Netflix-inspired
            dark theme. The black background and red accents create a bold,
            cinematic aesthetic that enhances visual appeal.
          </p>

          <p>
            The project follows clean component-based architecture and proper
            folder organization, ensuring scalability, readability, and
            maintainability.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
