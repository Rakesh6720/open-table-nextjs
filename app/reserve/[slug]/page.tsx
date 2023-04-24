import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function RestaurantReservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/41769254.jpg"
                  alt="steak"
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">
                    Aiana Restaurant Collective
                  </h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Tues, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */} {/* FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="First name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Last name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Special requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking "complete reservation" you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text message rates may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
            {/* FORM */}
          </div>
        </div>
      </main>
    </main>
  );
}
