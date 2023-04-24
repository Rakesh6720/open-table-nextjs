import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://resizer.otstatic.com/v2/photos/xlarge/1/41769251.jpg"
        alt="fish"
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Aiana Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="">View more information</Link>
        </div>
      </div>
    </div>
  );
}
