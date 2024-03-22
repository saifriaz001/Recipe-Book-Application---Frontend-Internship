import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-5 gap-y-4'>
      <div className=' h-40'>

      </div>
      <p className='text-3xl  font-semibold text-center mb-4'>Every recipe tells a story.</p>
      <p className='text-3xl font-semibold text-center mb-4'>Start cooking yours.</p>
      <Link to="/recipe">
        <button className='bg-black text-white border border-black p-2 rounded-lg'>Get Recipes</button>
      </Link>
    </div>
  );
}

export default Home;