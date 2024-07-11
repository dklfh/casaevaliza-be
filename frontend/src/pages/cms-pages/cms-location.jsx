import React from 'react'
import Sidebar from '../../component/cms/sidebar'
import Layout from '../../component/cms/layout'
import Divputih from '../../component/cms/divputih'
import Edit from '../../component/cms/edit'

function Locationcms() {
  return (
    <div>
      <Sidebar/>
      <Layout>
        <Divputih>
          <Edit/>
        </Divputih>
      </Layout>
    </div>
  )
}

export default Locationcms
