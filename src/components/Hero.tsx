"use client"

import React from 'react'
import Slider from "react-slick"
import Slide from './Slide';
const Hero = () => {

var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false
      };
const slideData =[

{
    id:0,
   img: "https://th.bing.com/th/id/R.298f481e711fd8d6c8e51f0d19429791?rik=V0aZpSDD%2b7vRrw&pid=ImgRaw&r=0",
    title:"Trending item",
    maintitle:"WOMEN'S LATEST FASHION SALE",
    price:"20$"
},

{
    id:0,
    img:"https://th.bing.com/th/id/R.37d5baa8475838f354b3a13b6ac01a97?rik=e5SV8SC4CfWogg&pid=ImgRaw&r=0",
    title:"Trending Accessories",
    maintitle:"MODERN SUNGLASSES",
    price:"15$"
},

{
    id:0,
    img:"https://th.bing.com/th/id/R.f7833e2015ff32e13f89284e4f815cd0?rik=tWKCOMbyHH8K3A&pid=ImgRaw&r=0",
    title:"Sale Offer",
    maintitle:"NEW FASHION SUMMER SALE",
    price:"35$"
},

]


  return (
    <div>
        <div className="container pt-6 lg:pt-0 "> 
       <Slider {...settings}>
       { slideData.map((item) =>( <Slide  key= {item.id}
        img={item.img}
       title={item.title}
       maintitle={item.maintitle}
       price={item.price}
        /> ))}
       </Slider>

        </div>

    </div>
  )
}

export default Hero
