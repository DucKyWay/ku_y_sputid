import Image from "next/image";
import { Earth } from "../../components/Earth";
import { Random_and_cal } from "../../components/Random_and_cal";
import dynamic from 'next/dynamic';

const LocationComponent = dynamic(() => import('../../components/LocationComponent'), {
  ssr: true, // Disable server-side rendering for this component
});

const cal_random_distance = () => {
  return 40075 - (Math.floor(Math.random() * (1620 - 1) + 1));
};

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
      <h1 className="text-red-400">Calculated Random Distance: {cal_random_distance()}</h1>
      <LocationComponent/>
    </main>
  );
}
