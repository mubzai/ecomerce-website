import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard';
import Link from 'next/link';



const ProductList = () => {
  return (
    <div>
      {productsData.map((item, index) => (
        <Link href={item.link} key={index}>
          
            <ProductCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          
        </Link>
      ))}
    </div>
  );
};

export default ProductList;


const productsData = [
  {   
      img:"https://th.bing.com/th/id/OIP.NbCBAgxfnj92eJH4DwDkigHaFj?rs=1&pid=ImgDetMain",
      title:"Watches",
      desc:"smart watches with vital plus",
      rating:"",
      price:"80",
      link: "http://localhost:3000/item" // Add the link here
  },
  { 
      img: "https://th.bing.com/th/id/OIP.b2q8IdtkS-VolI25I8f1SQHaHa?rs=1&pid=ImgDetMain",
      title: "Jacket",
      desc: "A stylish and versatile jacket perfect for any occasion.",
      price: "80",
      link: "http://localhost:3000/jacketitem" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/OIP.5OMlkmi1iP3D85j1jMu1rgHaJQ?w=1500&h=1875&rs=1&pid=ImgDetMain",
      title: "Skirt",
      desc: "An elegant skirt that flows beautifully.",
      price: "80",
      link: "http://localhost:3000/skirt" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/OIP.xZGkTQ3grFSh1zI1z9WTewHaJn?rs=1&pid=ImgDetMain",
      title: "Shirts",
      desc: "Classic shirts that combine comfort with style.",
      price: "80",
      link: "http://localhost:3000/shirt" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/R.ff29f98265bbf440c19bbc389f2f1637?rik=tif0buyt29rbxw&pid=ImgRaw&r=0",
      title: "Sun glasses",
      desc: "Chic sunglasses that provide excellent UV protection.",
      price: "80",
      link: "http://localhost:3000/sunglasses" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/OIP.WQHte1IS9qpmeZS3VvjpnwHaHa?rs=1&pid=ImgDetMain",
      title: "Party wear",
      desc: "Dazzling party wear that makes you stand out.",
      price: "80",
      link: "http://localhost:3000/partywear" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/OIP.9NA4Q4-LCnurMtcFRgkw1AHaEG?rs=1&pid=ImgDetMain",
      title: "Sports",
      desc: "High-performance sportswear designed.",
      price: "80",
      link: "http://localhost:3000/sports" // Add the link here
  },
  {
      img: "https://th.bing.com/th/id/OIP.26xhsEkIPSmTbIvOLTkCegAAAA?rs=1&pid=ImgDetMain",
      title: "Gym wear",
      desc: "Comfortable and durable gym wear.",
      price: "80",
      link: "http://localhost:3000/gymwear" // Add the link here
  }
];