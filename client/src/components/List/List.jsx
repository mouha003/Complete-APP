import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = () => {
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

        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Hat",
            oldPrice: 209.99,
            price: 119.99,
          },
          {
            id: 5,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Hat",
            oldPrice: 209.99,
            price: 119.99,
          },
          {
            id: 6,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Hat",
            oldPrice: 209.99,
            price: 119.99,
          },
          {
            id: 7,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Hat",
            oldPrice: 209.99,
            price: 119.99,
          },
          {
            id: 8,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Hat",
            oldPrice: 209.99,
            price: 119.99,
          },
      ];
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>

    ))}</div>
  )
}

export default List