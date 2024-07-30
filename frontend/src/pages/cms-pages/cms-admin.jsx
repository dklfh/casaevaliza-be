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
    try {
      const response = await axios.get('http://localhost:5000/home');
      setText(response.data);
    } catch (error) {
      console.error('Error fetching text data:', error);
    }
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
        <Divputih>
          <Tmptbutton>
            <Edit to={`/editimage`} />
          </Tmptbutton>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Laptop
                  </td>
                  <td className="px-6 py-4">
                    $2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">
                    White
                  </td>
                  <td className="px-6 py-4">
                    Laptop PC
                  </td>
                  <td className="px-6 py-4">
                    $1999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">
                    Black
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    $99
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Divputih>
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