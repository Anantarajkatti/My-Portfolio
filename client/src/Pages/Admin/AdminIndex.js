import React from 'react'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import { Tabs } from 'antd';
// import  { TabsProps } from 'antd';

function AdminIndex() {
    const onChange = (key) => {
        console.log(key);
      };

    const items= [
        {
          key: '1',
          label: 'Intro',
          children: <AdminIntro/>,
        },
        {
          key: '2',
          label: 'About Me',
          children: <AdminAbout/>,
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ];
  return (
    <div className="mt-5 p-5 ">
     <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
   
    

    </div>
  )
}

export default AdminIndex