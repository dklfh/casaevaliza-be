import React, { useState, useEffect } from 'react'
import Sidebar from '../../component/cms/sidebar'
import Layout from '../../component/cms/layout'
import Divputih from '../../component/cms/divputih'
import Edit from '../../component/cms/edit'
import Hapus from '../../component/cms/hapus'
import Add from '../../component/cms/add'
import Tmptbutton from '../../component/cms/tmptbutton'
import axios from "axios";

function Admincms() {
  const [text, setText] = useState([]);

  useEffect(() => {
    getText();
  }, []);

  const getText = async () => {
    const respone = await axios.get("http://localhost:5000/home");
    setText(respone.data);
  };

  return (
    <div>
      <Sidebar />
      <Layout>
        <Divputih>
          <Tmptbutton>
            <Edit />
            <Hapus />
            <Add />
          </Tmptbutton>
          <div>
            {text.map((item, index) => (
              <div key={index}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Divputih>
      </Layout>
    </div>
  )
}

export default Admincms
