import { FaPlus, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between py-1">
      <h1 className="text-4xl" onClick={() => navigate("/")}>
        <FaTiktok className="inline-block text-5xl" /> Tiktok
      </h1>
      <div className="flex gap-x-2 items-center">
        <button
          className="border-gray-500 border-2 px-4 py-1 flex items-center gap-x-2 justify-center"
          onClick={() => navigate("/upload")}
        >
          <FaPlus />
          Cargar
        </button>
        <button onClick={() => navigate("/signup")}>Iniciar Session</button>
        <button>...</button>
      </div>
    </header>
  );
}

export default Navbar;
