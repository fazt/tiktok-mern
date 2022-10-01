import { FiMusic } from "react-icons/fi";

interface Props {
  tiktoks: any[];
}

function TiktokFeed({ tiktoks }: Props) {
  return (
    <>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet sapiente quas obcaecati suscipit!
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
    </>
  );
}

export default TiktokFeed;
