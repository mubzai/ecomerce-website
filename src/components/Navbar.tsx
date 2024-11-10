import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
   <div className="container">
    <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish ">

<Link className="navbar__link relative hover:underline hover:text-red-500" href="http://localhost:3000/">HOME</Link>
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">CATEGORIES</Link>
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">MEN'S</Link>
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">WOMEN'S</Link>
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">jEWLREY</Link>
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">PERFUME</Link>   
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">HOT OFFERS</Link>   
<Link className="navbar__link relative hover:underline hover:text-red-500" href="#">WATCHES</Link>   
    
    </div>
   </div>

    </div>
  )
}

export default Navbar