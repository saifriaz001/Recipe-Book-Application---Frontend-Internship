import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Description from './Description';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            apiKey: 'e695f82bca544e8d96ba1425e81f2a2c',
            includeNutrition: true,
            number: 100,
          }
        });
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
   
        
       <div className=' h-14'>

       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="w-full flex mx-auto">
            <div className="w-full mx-auto flex justify-center items-center flex-col space-y-2 p-3 rounded-lg border border-black">
              <h3 className="text-wrap text-center font-semibold text-xl">{recipe.title}</h3>
              {recipe.image && (
                <img className="rounded-lg w-full h-48 object-cover object-center" src={recipe.image} alt={recipe.title} />
              )}
              <p className="text-center">Ready In Minutes: {recipe.readyInMinutes}</p>
              <div>
                <Link to={`/instructions/${recipe.id}`}>
                  <button className=' border border-black rounded-lg text-white  p-2 bg-black'
                   onClick={handleClick}>Get Ingredients</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;