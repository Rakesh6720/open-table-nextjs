import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2x">
            {" "}
            Open Table{" "}
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Sign in
              </button>
              <button className="border p-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
            <div className="text-center mt-10">
              <h1 className="text-4xl font-bold mb-2 text-white">
                Find your table for any occasion
              </h1>
              {/*SEARCH BAR */}
              <div className="text-left py-3 m-auto flex justify-center text-lg">
                <input
                  className="rounded  mr-3 p-2 w-[450px] text-white"
                  type="text"
                  placeholder="State, City or Town"
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white">
                  Let's go
                </button>
              </div>
              {/*SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/*CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/*CARD */}
            <div className="w-64 h-72 m-3 rounded overfow-hidden border cursor-pointer">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/3/48431319.jpg"
                alt="Flourchild"
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className-="text-sm font-bold mt-1">Booked 3 times today</p>
              </div>
            </div>
            {/*CARD */}
          </div>
          {/*CARDS */}
        </main>
      </main>
    </main>
  );
}
