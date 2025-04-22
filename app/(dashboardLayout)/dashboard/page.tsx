import down from "@/assets/pic/down.png";
import save from "@/assets/pic/save.png";
import up from "@/assets/pic/up.png";
import wallet from "@/assets/pic/wallet.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Summary Cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Quick Summary Section */}
          <div className="bg-white p-6 rounded-xl shadow flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Summary</h3>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Total Redemption */}
              <div className="bg-gradient-to-r from-blue-800 to-green-600 text-white p-4 rounded-xl ">
                <div className="flex gap-2 border-b border-gray-400 py-2">
                  <div>
                    <Image src={wallet} width={40} alt="total" />
                  </div>
                  <div>
                    <p className="text-sm">Total Redemption</p>

                    <p className="text-xs opacity-80 mt-1">
                      ⬆ 15% compared with last month
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold ">221</h2>
                  <FaArrowRight />
                </div>
              </div>

              {/* Last Week */}
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="flex gap-2 border-b border-gray-100 py-2">
                  <div>
                    <Image src={save} width={40} alt="total" />
                  </div>
                  <div>
                    <p className="text-sm">Last Week</p>
                    <p className="text-xs text-red-500 mt-1">
                      ⬇ 10% compared with last month
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold ">23</h2>
                  <FaArrowRight />
                </div>
              </div>

              {/* This Week */}
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="flex gap-2 border-b border-gray-100 py-2">
                  <div>
                    <Image src={up} width={40} alt="total" />
                  </div>
                  <div>
                    <p className="text-sm">This Week</p>
                    <p className="text-xs text-red-500 mt-1">
                      ⬇ 2% compared with last month
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold ">51</h2>
                  <FaArrowRight />
                </div>
              </div>

              {/* This Month */}

              <div className="bg-white p-4 rounded-xl shadow">
                <div className="flex gap-2 border-b border-gray-100 py-2">
                  <div>
                    <Image src={down} width={40} alt="total" />
                  </div>
                  <div>
                    <p className="text-sm">This Month</p>
                    <p className="text-xs text-blue-500 mt-1">
                      ⬇ 8% compared with last month
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold ">119</h2>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          {/* Current Plan Section */}
          <div className="bg-white p-6 rounded-xl shadow w-full md:w-80">
            <h2 className="text-lg font-semibold mb-4">
              Current plan: Free Plan
            </h2>

            <div className="space-y-4">
              {/* Basic Plan */}
              <div className="pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mb-1">Basic</p>
                  <span className="text-xs text-green-600 font-semibold cursor-pointer">
                    Upgrade
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">$449.00</span>
                    <span className="text-xs text-gray-400 ml-1">/$500.00</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-yellow-600 block">
                      10% save
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mb-1">Standard</p>
                  <span className="text-xs text-green-600 font-semibold cursor-pointer">
                    Upgrade
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">$790.50</span>
                    <span className="text-xs text-gray-400 ml-1">/$1000</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-yellow-600 block">
                      20% save
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mb-1">Premium</p>
                  <span className="text-xs text-green-600 font-semibold cursor-pointer">
                    Upgrade
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">$1750.50</span>
                    <span className="text-xs text-gray-400 ml-1">/$2000</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-yellow-600 block">
                      15% save
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <h2 className="text-lg font-semibold mb-4">Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-300 to-blue-800 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold">
                  Buy 1 coffee and get 20% off +35 X points!
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="mt-4 inline-block bg-green-800 text-white text-sm px-4 py-2 rounded-md">
                    Active
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-900  text-white p-6 rounded-xl ">
                <h3 className="text-xl font-bold">
                  35% off on Friday&apos;s between 3 PM t 7 PM
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="mt-4 inline-block bg-green-900 text-white text-sm px-4 py-2 rounded-md">
                    Expiring 2 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
