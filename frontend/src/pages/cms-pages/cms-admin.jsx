import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/cms/sidebar';
import Layout from '../../component/cms/layout';
import Divputih from '../../component/cms/divputih';
import Edit from '../../component/cms/edit';
import Hapus from '../../component/cms/hapus';
import Add from '../../component/cms/add';
import Tmptbutton from '../../component/cms/tmptbutton';
import axios from 'axios';
import H2cms from '../../component/cms/h2cms';
import Pcms from '../../component/cms/pcms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admincms() {
  const [text, setText] = useState([]);

  useEffect(() => {
    getText();
  }, []);

  const getText = async () => {
    const response = await axios.get('http://localhost:5000/home');
    setText(response.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/home/${id}`);
      getText(); // Ambil ulang data setelah penghapusan berhasil
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <Layout>
        {text.map((item, index) => (
          <Divputih key={item.id || index}>
            <div>
              <Tmptbutton>
                <Edit to={`/edit/home/${item._id}`} />
                <Hapus onDelete={() => handleDelete(item._id)} />
                <Add />
              </Tmptbutton>
              <div>
                <H2cms text={item.title} />
                <Pcms text={item.text} />
              </div>
            </div>
          </Divputih>
        ))}
        <ToastContainer />
      </Layout>
    </div>
  );
}

export default Admincms;
