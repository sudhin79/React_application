import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import Explore from '../../components/ExploreMenu/Explore';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {


  const [category, setCategory] = useState("All");


  return (
    <div>
      {/* <h1>Welcome to the Home Page!</h1> */}
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;

