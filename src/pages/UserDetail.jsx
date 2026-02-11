import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2 className="text-center mt-20 text-red-600">User Not Found</h2>;
  }

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-gray-900 p-10 rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          {user.name}
        </h2>
        <p className="text-gray-400 mb-6">{user.email}</p>

        <button
          onClick={() => navigate("/users")}
          className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
