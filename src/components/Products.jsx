import React from 'react'
import ProductCard from './layouts/ProductCard'
const data =[
    {
        id:0,
        img:"/assets/product12.jpg",
        name:"addidas shoes",
        price:"198.00",
        discount:"20% Off",
    },
    {
        id:1,
        img:"/assets/product14.jpg",
        name:"shirt",
        price:"198.00",
        discount:"20% Off",
    },
    {
        id:14,
        img:"/assets/product15.jpg",
        name:"Hublot watch",
        price:"198.00",
        discount:"20% Off",
    },
]
const Products = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16'>
        <div>
            <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor mb-10'>New Arrival</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-10'>
            {data.map((items)=>(
              <ProductCard key={items.id}
              id={items.id}
              img={items.img}
              name={items.name}
              price={items.price}
      
              />  
            ))}
        </div>
    </div>
  )
}

export default Products