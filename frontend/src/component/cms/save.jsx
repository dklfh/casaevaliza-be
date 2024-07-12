import React from 'react';

function Save({ onClick }) {
  return (
    <div>
      <button 
        type="submit" 
        onClick={onClick}
        className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium tracking-wide rounded-lg w-auto px-5 py-2 text-sm text-center' 
      >
        SAVE
      </button>
    </div>
  );
}

export default Save;