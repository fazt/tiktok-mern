import axios from "axios";
import { useEffect, useState } from "react";
import { FiMusic } from "react-icons/fi";
import { FaTiktok, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [tiktoks, setTiktoks] = useState<any[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function loadTiktoks() {
      const res = await axios.get("http://localhost:3000/videos");
      setTiktoks(res.data);
    }
    loadTiktoks();
  }, []);

  if (tiktoks.length === 0) {
    return <h1>No videos yet</h1>;
  }

  return (
    <div className="bg-zinc-800">
      <div className="container mx-auto px-36">
        <header className="flex justify-between py-1">
          <h1 className="text-4xl">
            <FaTiktok className="inline-block text-5xl" /> Tiktok
          </h1>
          <div className="flex gap-x-2 items-center">
            <button className="border-gray-500 border-2 px-4 py-1 flex items-center gap-x-2 justify-center" onClick={() => navigate('/upload')}>
              <FaPlus />
              Cargar
            </button>
            <button>Iniciar Session</button>
            <button>...</button>
          </div>
        </header>

        <div className="grid grid-cols-7 gap-x-5">
          <div className="col-span-2 bg-blue-800">Sidebar</div>

          <div className="col-span-5">
            <div className="bg-zinc-900 flex flex-col px-10 justify-center gap-y-2">
              {tiktoks.map((tiktok) => {
                return (
                  <div key={tiktok._id} className="bg-black">
                    <div>
                      <header className="">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <h1>{tiktok.title}</h1>
                            <h3 className="text-xs">userhere</h3>
                          </div>
                          <button className="border-red-500 border-2 rounded-md px-4 py-1 text-sm text-red-400 font-bold">
                            Seguir
                          </button>
                          {/* <p>{tiktok.description}</p> */}
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eveniet sapiente quas obcaecati suscipit!
                        </p>
                        <p className="flex items-center gap-x-2">
                          <FiMusic className="w-3 h-3" />
                          Song name - author
                        </p>
                      </header>
                    </div>
                    <video
                      className="rounded-lg w-1/3"
                      src={`http://localhost:3000/${tiktok.video}`}
                      controls
                      autoPlay={true}
                      muted
                      loop
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
