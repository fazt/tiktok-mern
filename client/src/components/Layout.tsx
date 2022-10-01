import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="bg-zinc-800">
      <div className="container mx-auto px-36">
        <Navbar />

        <div className="grid grid-cols-7 gap-x-5">
          <div className="col-span-2 bg-blue-800">Sidebar</div>

          <div className="col-span-5">
            <div className="bg-zinc-900 flex flex-col px-10 justify-center gap-y-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
