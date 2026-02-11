import { Link } from "react-router-dom";
import { users } from "../data/users";

const Users = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Users List
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform"
          >
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-500 mb-4">{user.email}</p>

            <Link
              to={`/users/${user.id}`}
              className="text-indigo-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
