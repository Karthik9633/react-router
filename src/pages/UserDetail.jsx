import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2 className="text-center mt-20 text-red-500">User Not Found</h2>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-xl rounded-xl p-8 text-center">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        {user.name}
      </h2>
      <p className="text-gray-600 mb-6">{user.email}</p>

      <button
        onClick={() => navigate("/users")}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;
