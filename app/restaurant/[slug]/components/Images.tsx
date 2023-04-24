import React from "react";

export default function Images() {
  return (
    <div>
      <h1 className="font-bold text-2xl mt-10 mb-7 border-b pb-5">5 Photos</h1>
      <div className="flex flex-wrap">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/48431288.jpg"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/48431215.jpg"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/48431216.jpg"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/48431281.jpg"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/48431283.jpg"
          className="w-56 h-44 mr-1 mb-1"
        />
      </div>
    </div>
  );
}
