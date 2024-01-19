import React from 'react'
import ProductCard from './layouts/ProductCard'
const data = [
    {
        id:0,
        img:"/assets/product1.jpg",
        name:"Nike Air",
        price:"198.00",
        discount:"20% Off",
    },
    {
        id:1,
        img:"/assets/product2.jpg",
        name:"Spotswear Futura",
        price:"208.00",
        discount:"40% Off",
    },
    {
        id:2,
        img:"/assets/product3.jpg",
        name:"Royal Collection",
        price:"299.00",
        discount:"40% Off",
    },
    {
        id:3,
        img:"/assets/product4.jpg",
        name:"CozyCraze Hoodies",
        price:"159.00",
        discount:"23% Off",
    },
    {
        id:4,
        img:"/assets/product5.jpg",
        name:"Nike Air",
        price:"198.00",
        discount:"20% Off",
    },
    {
        id:5,
        img:"/assets/product6.jpg",
        name:"LuxeLoom Purses",
        price:"189.00",
        discount:"30% Off",
    },
    {
        id:6,
        img:"/assets/product7.jpg",
        name:"Nike Air",
        price:"198.00",
        discount:"20% Off",
    },
    {
      id:7,
      img:"/assets/product8.jpg",
      name:"Nike Air",
      price:"198.00",
      discount:"20% Off",
  },
  {
    id:8,
    img:"/assets/product9.jpg",
    name:"Nike Air",
    price:"198.00",
    discount:"20% Off",
},
{
  id:9,
  img:"/assets/product10.jpg",
  name:"Nike Air",
  price:"198.00",
  discount:"20% Off",
},
{
id:10,
img:"/assets/product11.jpg",
name:"Nike Air",
price:"198.00",
discount:"20% Off",
},
{
id:11,
img:"/assets/product12.jpg",
name:"Nike Air",
price:"198.00",
discount:"20% Off",
},
]
const Features = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center pt-24'>
        <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>Exclusive Products</h1>
     <div className='flex  flex-wrap justify-center gap-10 pt-8'>
        {data.map((items)=>(
            <div className='md:w-2/4 lg:w-1/4'>
            <ProductCard key={items.id}
            id={items.id}
            img={items.img}
            name={items.name}
            price={items.price} />
            </div>
        ))}
     </div>
    </div>
  )
}

export default Features