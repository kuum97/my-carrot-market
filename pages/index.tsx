import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between transition-colors p-6 rounded-2xl shadow-2xl">
        <span className="font-semibold dark:text-white text-3xl">
          Select Item
        </span>
        <ul>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-100 my-2">
                Grey Chair
              </span>
              <span className="font-semibold dark:text-gray-100">$19</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <button
          className="block mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3 text-center rounded-xl shadow-l w-2/4 mx-auto 
        hover:bg-yellow-400 hover:text-black dark:hover:bg-white
        active:bg-blue-500 active:text-white
        transition
        "
        >
          CheckOut
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl group">
        <div className="bg-blue-500 landscape:bg-yellow-300 p-6 pb-14 xl:pb-52">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex justify-between relative -top-16 items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-blue-200 rounded-full transition group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5 ">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-center">
          <span className="text-xl">←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">🩷</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-64 my-5" />
        <div className="flex flex-col">
          <span className="font-medium  text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-300 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-300 transition" />
              <button className="w-5 h-5 rounded-full bg-green-500 focus:ring-2 ring-offset-2 ring-green-300 transition" />
            </div>
            <div className="flex items-center space-x-4 ">
              <button className="rounded-xl bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <div>1</div>
              <button className="rounded-xl bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-extrabold text-xl">$450</span>
            <button className="bg-blue-500 p-3 rounded-2xl text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
