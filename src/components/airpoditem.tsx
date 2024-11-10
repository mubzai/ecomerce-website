import { PiKeyReturnFill } from "react-icons/pi";
import { PiShieldWarningLight } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { TbCashRegister, TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

export const WatchItem = () => {
  return (
    <div className="main">
      <div className="2ndmain flex flex-row px-16 pt-2 pb-6 gap-4">
        <div className="col1 w-[320px]">
          <div className="bigpic">
            <div className="pichere w-[320px] h-[320px] bg-orange-300"><img src="https://th.bing.com/th/id/OIP.NbCBAgxfnj92eJH4DwDkigHaFj?rs=1&pid=ImgDetMain" alt="" className="w-[320px] h-[320px]"/></div>
          </div>
          <div className="picrow"></div>
        </div>

        <div className="col2 flex flex-col w-[500px]">
          <div className="statement text-[20px] font-semibold mx-2 mb-2">
            <span>
              Luxury Watch with Stainless Steel Strap
              <br />
              and Quartz Movement
              <br />
              Water Resistant and Durable
              <br />
              Perfect for Formal and Casual Wear
            </span>
          </div>
          <div className="ratenbrand mx-2 mb-2">
            <div className="heart flex justify-end">
              <span>O</span>
            </div>
            <div className="rating text-[13px] mb-4">
              <span className="text-yellow-500 mr-2 mb-">*****</span>
              <span className="text-blue-600 mr-2 hover:cursor-pointer hover:underline">1122 ratings</span>
              <span className="mr-2">|</span>
              <span className="text-blue-600 mr-2 hover:cursor-pointer hover:underline">184 unanswered invites</span>
            </div>
            <div className="brand text-[13px] mb-3">
              <span className="text-gray-400 mr-2">Brand</span>
              <span className="text-blue-600 mr-2 hover:cursor-pointer hover:underline">No Brand</span>
              <span className="mr-2">|</span>
              <span className="text-blue-600 mr-2 mb-2 hover:cursor-pointer hover:underline">More watches from no brand</span>
            </div>
          </div>
          <div className="orangstrip bg-[#E8532B] flex justify-end py-3 mx-2 mb-3">
            <div className="LINES text-white font-semibold pr-3">
              Check Out the Payday Sale Deals
              <br />
              Shop Now!
            </div>
            <div className="paydale bg-yellow-300 text-[#5a685b] font-bold px-3 text-center align-middle rounded-l-md">
              <span>
                PAYDAY
                <br />
                SALE
              </span>
            </div>
          </div>
          <div className="pricenother flex flex-col  mx-2 mb-3">
            <div>
              <span className="text-orange-600 text-[28px] font-semibold">
                Rs.934
              </span>
            </div>
            <div className="flex flex-row">
              <span className="text-[14px] text-gray-300 line-through pr-1">
                Rs. 4,000
              </span>
              <span className="text-[14px]">-77%</span>
            </div>
            <div>
              <span className="text-[14px] text-gray-400 mr-7">Installment</span>
              <span className="text-[14px]">Upto 36 months, as low as Rs.43 per month.</span>
            </div>
          </div>
          <div className="colnquant mx-2 mb-3">
            <div className="flex flex-row">
              <span className="text-gray-400 text-[14px] mr-3">Colour Family</span>
              <span className="text-black">silver</span>
            </div>
            <div className="flex flex-row justify-center mb-2">
              <div className="w-[32px] h-[32px] bg-yellow-300 mr-2 hover:border-[1px] hover: border-orange-600 hover:cursor-pointer"><img src="watch1.webp" alt="" /></div>
              <div className="w-[32px] h-[32px] bg-yellow-300 mr-2 hover:border-[1px] hover: border-orange-600 hover:cursor-pointer"><img src="watch2.jpg" alt="" /></div>
              <div className="w-[32px] h-[32px] bg-yellow-300 mr-2 hover:border-[1px] hover: border-orange-600 hover:cursor-pointer"><img src="watch3.png" alt="" /></div>
              <div className="w-[32px] h-[32px] bg-yellow-300 mr-2 hover:border-[1px] hover: border-orange-600 hover:cursor-pointer"><img src="watch1.webp" alt="" /></div>
              <div className="w-[32px] h-[32px] bg-yellow-300 hover:border-[1px] hover: border-orange-600 hover:cursor-pointer"><img src="watch2.jpg" alt="" /></div>
            </div>
            <div className="quantity flex flex-row mb-3">
                <span className="mr-8">Quantity</span>
                <div className="flex flex-row"><div className="w-[24px] h-[24px] bg-slate-100 text-center font-bold text-gray-600 hover:text-white hover:bg-gray-300 hover:cursor-pointer">-</div>
                <div className="w-[24px] h-[24px] bg-white text-center">1</div>
                <div className="w-[24px] h-[24px] bg-slate-100 text-center font-bold text-gray-600 hover:text-white hover:bg-gray-300 hover:cursor-pointer">+</div>
                </div>
            </div>
          </div>
          <div className="buynownquant flex flex-row mx-2 mb-2">
            <div className=" bg-green-600 pt-2 px-16 mr-2 text-white hover:cursor-pointer">Buy Now</div>
            <div className=" bg-blue-600 py-2 px-16 text-white hover:cursor-pointer">Add to Cart</div>
          </div>
        </div>

        <div className="col3 flex flex-col gap-3">
          <div className="part1 py-4 bg-gray-50">
            <div className="flex justify-between py-2 px-5">
                <div className="text-gray-700">Delivery Option</div>
                <div className=""><TbTruckDelivery  className="text-gray-700"/>
                </div>
            </div>
            <div className="flex flex-row py-2 gap-5 border-b-[1px] border-gray-150 px-5">
            <div className="flex flex-col justify-center align-middle"><FaMapMarkerAlt className="text-gray-600"/>
            </div>
                <div className="">Sindh, Karachi - Gulshan-e-<br />Iqbal, Block 15</div>
                <div className="">change</div>
            </div>
            <div className="flex flex-row py-2 gap-5 px-5">
            <div className="flex flex-col justify-center align-middle"><TbTruckDelivery className="text-gray-500"/></div>
                <div className=""><div className="">Standard Delivery</div>
                <div className="text-[14px]">Guaranteed by 30 Oct-3 Nov</div>
                </div>
                <div className="pl-5">Rs.135</div>
            </div>
            <div className="flex flex-row py-2 gap-5 px-5 border-b-[1px] border-gray-150">
            <div className="flex flex-col justify-center align-middle"><TbCashRegister className="text-gray-500"/>
            </div>
            <div className="">Cash on Delivery Available</div>
            </div>

            <div className="flex justify-between py-3 gap-5 px-5">
                <div className="text-gray-700">Returns & Warranty</div>
                <div><GiReturnArrow className="text-gray-500"/>
                </div>
            </div>
            <div className="flex flex-row py-2 gap-5 px-5">
            <div className="flex flex-col justify-center align-middle"><PiKeyReturnFill className="text-gray-500"/>
            </div>
            <div className="">14 Days easy Return</div>
            </div>

            <div className="flex flex-row py-2 gap-5 px-5 border-b-[1px] border-gray-150">
            <div className="flex flex-col justify-center align-middle"><PiShieldWarningLight className="text-gray-500"/>
            </div>
            <div className="">Warranty Not Available</div>
            </div>

            <div className="flex flex-row py-2 px-5 gap-2">
                <div className="flex flex-col justify-center align-middle text-center">
                    <div className="w-[100px] h-[100px]"><img src="qrcode.jpeg" alt=""/></div>
                    <div className="text-[12px]">scan with mobile</div>
                </div>
                <div className="h-[100px] w-[150px] shadow-md shadow-gray-400 rounded-md bg-white">
                    <div className="w-[44px] h-[44px] pl-2 pt-2"><img src="darazii.png" alt=""/></div>
                    <div className="text-[12px] text-gray-400 pl-2">Download app to enjoy <br />exclusive discounts</div>
                </div>
            </div>

          </div>
          <div className="part2 bg-gray-50">
            <div className="1st flex flex-row px-5">
                <div className="flex flex-col">
                    <span className="text-gray-500">sold by</span>
                    <span>AS online store (lahore)</span>
                </div>
                <div className="ml-12 text-blue-500 font-semibold">chat now</div>
            </div>
            <div className="2nd flex flex-row ">
                <div className="flex flex-col pl-2 pr-5 border-[1px] border-gray-150">
                    <span className="text-[14px] text-gray-700">positive seller<br />ratings</span>
                    <span className="text-[24px] mt-3">80%</span>
                </div>
                <div className="flex flex-col pl-2 pr-5 border-[1px] border-l-0 border-gray-150">
                    <span className="text-[14px] text-gray-700">ship on time<br />96%</span>
                    <span className="text-[24px] mt-3">80%</span>
                </div>
                <div className="flex flex-col pl-2 pr-5 border-[1px] border-l-0 border-gray-150">
                    <span className="text-[14px] text-gray-700">chat response<br />rate</span>
                    <span className="text-[12px] mt-3 text-gray-500">Not enough data</span>
                </div>
            </div>
            <div className="3rd py-2 text-center text-[14px] text-blue-700">GO TO STORE
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};