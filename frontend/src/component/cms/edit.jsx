import React from 'react';
import { Link } from 'react-router-dom';

function Edit({ to }) {
  return (
    <div>
      <Link to={to} type="submit" className='text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium tracking-wide rounded-lg w-auto px-5 py-2 text-sm text-center'>
        EDIT
      </Link>
    </div>
  );
}

export default Edit;
