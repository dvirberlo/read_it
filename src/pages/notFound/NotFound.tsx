import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="mt-2 p-1">
      <h2 className="text-2xl">Page Not Found</h2>
      <div className="p-2">
        <p className="text-content1">
          The page you are looking for does not exist.
        </p>
        <button
          className="ml-auto mr-4 cursor-pointer hover:text-primary3 text-primary1"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
