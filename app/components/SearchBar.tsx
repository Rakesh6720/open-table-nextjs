"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left py-3 m-auto flex justify-center text-lg">
      <input
        className="rounded  mr-3 p-2 w-[450px] text-white"
        type="text"
        placeholder="State, City or Town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
      >
        Let's go
      </button>
    </div>
  );
}
