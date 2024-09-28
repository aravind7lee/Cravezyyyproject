// Home.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import NutritionFilter from '../../components/NutritionFilter/NutritionFilter'; // Import the new component
import AppDownload from '../../components/AppDownload/AppDownload';
import MealPlanner from '../../components/MealPlanner/MealPlanner';
import StickyCart from '../../components/StickyCart/StickyCart';
import ReviewSlider from '../../components/ReviewSlider/ReviewSlider';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <NutritionFilter /> {/* Mounting the NutritionFilter */}
      <FoodDisplay category={category} />
      <ReviewSlider />
      <MealPlanner />
      <AppDownload />
      <StickyCart />
    </>
  );
};

export default Home;
