import React from 'react'
import ProductCard from './layouts/ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Shop = () => {
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
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows:false,
        responsive:[
          {
            breakpoint:1023,
              settings:{
                slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
                dots:true
              }
            
          },
           {
            breakpoint:768,
              settings:{
                slidesToShow:2,
                slidesToScroll:2,
           initialSlide:2,
                dots:true,
              }
            
          },
           {
            breakpoint:480,
              settings:{
                slidesToShow:1,
                slidesToScroll:1,
              initialSlide:2,
              }
            
          },
        ]
      };
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
        <div>
            <h1 className='font-semibold text-2xl'>
            Best sellers
            </h1>
        </div>
        <div className='mt-8'>
        <Slider{...settings}>
       {data.map((items)=>(
     
        <ProductCard key={items.id}
        id={items.id}
        img={items.img}
        name={items.name}
        price={items.price}

        />
 
       ))}
              </Slider>
        </div>
    </div>
  )
}

export default Shop