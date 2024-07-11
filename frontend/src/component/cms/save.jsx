import React from 'react';
import { Link } from 'react-router-dom';

function Save() {
  return (
    <div>
      <Link 
        to="" 
        type="submit" 
        className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium tracking-wide rounded-lg w-auto px-5 py-2 text-sm text-center' 
      >
        SAVE
      </Link>
    </div>
  );
}

export default Save;