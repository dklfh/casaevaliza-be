import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from './sidebar';
import Layout from './layout';
import Fileinput from './fileinput';
import Divputih from './divputih';
import Tmptbutton from './tmptbutton';
import Save from './save'; // Import komponen Save
import Batal from './batal'; // Import komponen Batal

function Editimg() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/images');
      const formattedImages = response.data.map(image => ({
        src: `http://localhost:5000/${image.filename}`,
        alt: image.filename
      }));
      setImages(formattedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post('http://localhost:5000/single', formData);
      console.log(response.data.msg);
      fetchImages(); // Panggil fungsi untuk memperbarui daftar gambar
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageDelete = async (index) => {
    const image = images[index];
    try {
      await axios.delete(`http://localhost:5000/images/${image.alt}`);
      setImages(images.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:5000/save-images', { images });
      console.log(response.data.msg);
      navigate(-1); // Navigate to the previous page
    } catch (error) {
      console.error('Error saving images:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <Layout>
        <h1 className='font-semibold text-slate-800 uppercase mb-4 text-2xl tracking-wide text-center'>EDIT IMAGE</h1>
        <Divputih>
          <Fileinput
            onFileChange={(file) => console.log(file)}
            onSubmit={handleImageUpload}
            images={images}
            onDelete={handleImageDelete}
          />
          <Tmptbutton>
            <Save onClick={handleSave} />
            <Batal onClick={() => navigate(-1)} /> {/* Kembali ke halaman sebelumnya */}
          </Tmptbutton>
        </Divputih>
      </Layout>
    </div>
  );
}

export default Editimg;