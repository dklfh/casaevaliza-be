import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar';
import Layout from './layout';
import Divputih from './divputih';
import Texteditor from './texteditor';
import Fileinput from './fileinput';
import Save from './save';
import Tmptbutton from './tmptbutton';
import Batal from './batal';
import Header from './header';

function Halamanedit() {
  const { endpoint, _id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', title: '', text: '' });
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/${endpoint}/${_id}`);
      setData(response.data);
    };
    fetchData();
    fetchImages();
  }, [endpoint, _id]);

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const updateText = async (e) => {
    e.preventDefault();
    try {
      const plainText = stripHtmlTags(data.text);
      await axios.patch(`http://localhost:5000/${endpoint}/${_id}`, {
        title: data.title,
        text: plainText,
      });
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div>
      <Sidebar />
      <Layout>
        <h1 className='font-semibold text-slate-800 uppercase mb-4 text-2xl tracking-wide text-center'>EDIT TEXT {data.name}</h1>
        <Divputih>
          <Header
            label="Title"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
          <br />
          <Texteditor label="Paragraf" defaultValue={data.text} onChange={(value) => handleChange('text', value)} />
          <br />
          <Fileinput
            onFileChange={(file) => console.log(file)}
            onSubmit={handleImageUpload}
            images={images}
            onDelete={handleImageDelete}
          />
          <br />
          <Tmptbutton>
            <Save onClick={updateText} />
            <Batal />
          </Tmptbutton>
        </Divputih>
      </Layout>
    </div>
  );
}

export default Halamanedit;