import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';


const FeaturedProducts = ({type}) => {
  const {data,loading,error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    );
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
        {error 
          ? "Something went wrong" 
          : loading
          ? "loading"
          : data.map((item) =>
            <Card item={item} key={item.id}/>
        )}
       </div>
    </div>
  )
}

export default FeaturedProducts;