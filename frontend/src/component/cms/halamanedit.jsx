import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [data, setData] = useState({ name: '', title: '', text: '' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/${endpoint}/${_id}`);
      setData(response.data);
    };
    fetchData();
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

  return (
    <div>
      <Sidebar />
      <Layout>
        <h1 className='font-semibold text-slate-800 uppercase mb-4 text-2xl tracking-wide text-center'>EDIT {data.name}</h1>
        <Divputih>
          <Header 
            label="Title"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
          <br />
          <Texteditor label="Paragraf" defaultValue={data.text} onChange={(value) => handleChange('text', value)} />
          <br />
          <Fileinput />
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
