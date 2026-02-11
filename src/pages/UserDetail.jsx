import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        User Not Found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4">
      
      <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          User Details
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>

              <tr className="border-b border-gray-700">
                <th className="py-3 text-gray-400">User ID</th>
                <td className="py-3 text-white">{user.id}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <th className="py-3 text-gray-400">Full Name</th>
                <td className="py-3 text-white">{user.name}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <th className="py-3 text-gray-400">Email</th>
                <td className="py-3 text-white">{user.email}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <th className="py-3 text-gray-400">Joining Date</th>
                <td className="py-3 text-white">{user.joiningDate}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <th className="py-3 text-gray-400">Role</th>
                <td className="py-3 text-white">{user.role}</td>
              </tr>

              <tr>
                <th className="py-3 text-gray-400">Status</th>
                <td
                  className={`py-3 font-semibold ${
                    user.status === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {user.status}
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/users")}
            className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDetail;
