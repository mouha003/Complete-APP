import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';


const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tittle: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 99.99,
      price: 59.99,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tittle: "Coat",
      isNew: true,
      oldPrice: 709.99,
      price: 419.99,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tittle: "Skirt",
      isNew: true,
      oldPrice: 399.99,
      price: 169.99,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tittle: "Hat",
      oldPrice: 209.99,
      price: 119.99,
    },
  ];

const FeaturedProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
       <div className='top'>
            <h1>{type} products </h1>
            <p> Fresh Drop. The New Year Gray Area. YT performance gear, 
                chill clothes & loungewear for men. 
                Our technical fabrics and iconic fits were made for making moves.
                At YT we're all about keeping things kind and clean, 
                from the way we make our clothes

            </p>
       </div>
       <div className="bottom">
        {data.map(item =>(
            <Card item={item} key={item.id}/>
        ))}
       </div>
    </div>
  )
}

export default FeaturedProducts;