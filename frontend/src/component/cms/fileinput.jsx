import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Fileinput({ onFileChange, onSubmit, images, onDelete }) {
  const [file, setFile] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const fileInputRef = useRef(null); // Menambahkan useRef untuk input file

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (onFileChange) {
      onFileChange(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(file);
      setFile(null); // Mengosongkan state file setelah submit
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset nilai input file
      }
      toast.success('Image Upload Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDelete = (index) => {
    if (onDelete) {
      onDelete(index);
      toast.success('Image deleted successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="file_input">Upload file</label>
      <div className='flex gap-6'>
        <input
          className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          id="file_input"
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef} // Menambahkan ref ke input file
        />
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className='mt-4'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Preview</label>
        {file && <img className='w-52 rounded-lg' src={URL.createObjectURL(file)} alt="Preview" />}
        {file && <p className='text-sm text-gray-500 mt-2'>{file.name}</p>}
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>List of Uploaded Pictures</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images && images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out transform group-hover:brightness-50" src={image.src} alt={image.alt || 'uploaded'} />
              <p className='text-sm text-gray-500 mt-2'>{image.alt || 'uploaded image'}</p>
              {hoveredIndex === index && (
                <button
                  type="submit"
                  onClick={() => handleDelete(index)}
                  className='absolute top-0 right-0 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium tracking-wide rounded-lg w-auto px-5 py-2 text-sm text-center'
                >
                  DELETE
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fileinput;