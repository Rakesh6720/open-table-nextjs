export default function Header() {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      {/*SEARCH BAR */}
      <div className="text-left py-3 m-auto flex justify-center text-lg">
        <input
          className="rounded  mr-3 p-2 w-[450px] bg-white"
          type="text"
          placeholder="State, City or Town"
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white">
          Let's go
        </button>
      </div>
      {/*SEARCH BAR */}
    </div>
  );
}
