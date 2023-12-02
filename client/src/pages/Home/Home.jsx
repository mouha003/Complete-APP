import React from 'react';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Subscribe from '../../components/Subscribe/Subscribe';


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="trending"/>
      <Subscribe />
    </div>
  )
}

export default Home