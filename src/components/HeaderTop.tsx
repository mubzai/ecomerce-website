import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border gray-200 hidden sm:block">
     <div className="container py-4"> 
     <div className="flex justify-between items-center">
    <div className="hidden lg:flex gap-1"> 
      <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white">
    <FaFacebook />
</div>
<div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white">
    <FaTwitter />
</div>
<div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white">
    <FaInstagram />
</div>
<div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white">
    <FaLinkedin/>
</div>
    </div>


    <div className="text-gray-500 text-[12px]">
        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
    </div>

    <div className="flex gap-4">
        <select className="text-gray-500 text-[12px] w-[70px]"
         name="currency" 
         id="currency"
        >
        <option value="USD $">(USD) $</option>
        <option value="EUR €">(EUR) €</option>
        <option value="PKR">(PKR) Rs</option>
        </select>

         <select className="text-gray-500 text-[12px] w-[80px]" 
         name="language" 
         id="language"
         >
            <option value="English">English</option>
          <option value="Urdu">Urdu</option>
         </select>
    </div>


     </div>
     </div>
    </div>
  )
}

export default HeaderTop