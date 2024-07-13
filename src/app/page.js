import Image from "next/image";
import { Earth } from "../../components/Earth";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex mt-16 mx-6 justify-center">
        <h1 className="text-6xl font-bold">
          STIPUD GPS
        </h1>
      </div>
      <div className="flex justify-center items-center my-10">
        <input className="rounded-md h-8 w-80 px-4 focus:outline-none text-black focus:h-9 transition-all"  placeholder="Search">
        </input>
      </div>
      <Earth/>
    </main>
  );
}
