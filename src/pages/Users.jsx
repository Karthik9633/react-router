import { Link } from "react-router-dom";
import { users } from "../data/users";

const Users = () => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">User Profiles</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 hover:bg-gray-800 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {user.name}
            </h3>
            <p className="text-gray-400 mb-4">{user.email}</p>

            <Link
              to={`/users/${user.id}`}
              className="text-red-600 hover:underline"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
