import React from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import Layout from './layout';
import Divputih from './divputih';
import Texteditor from './texteditor';
import Fileinput from './fileinput';
import Save from './save';
import Tmptbutton from './tmptbutton';

function Halamanedit() {
  const { username } = useParams();

  return (
    <div>
      <Sidebar />
      <Layout>
        <h1 className='font-semibold text-slate-800 uppercase mb-4 text-2xl tracking-wide text-center'>EDIT {username}</h1>
        <Divputih>
          <br />
          <Texteditor />
          <br />
          <Fileinput />
          <br />
          <Tmptbutton>
            <Save />
          </Tmptbutton>
        </Divputih>
      </Layout>
    </div>
  )
}

export default Halamanedit
