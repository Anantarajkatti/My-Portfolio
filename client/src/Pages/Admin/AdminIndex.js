import React, { useEffect } from "react";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { Tabs } from "antd";
import Header from "../../Components/Header.js";
import { useSelector } from "react-redux";
import AdminEducation from "./AdminEducation.js";
import AdminProjects from "./AdminProjects.js";
import AdminCourses from "./AdminCourses.js";
import AdminContact from "./AdminContact.js";

// import  { TabsProps } from 'antd';

function AdminIndex() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(()=>{
    if(!localStorage.getItem("token")){
        window.location.href="/admin-login"
    }
   })

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About Me",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Education",
      children: <AdminEducation/>,
    },
    {
      key: "4",
      label: "Projects",
      children: <AdminProjects/>,
    },
    {
      key: "5",
      label: "Courses",
      children: <AdminCourses/>,
    },
    {
      key:'6',
      label:"Contact",
      children:<AdminContact/>,
    }
  
  ];
  return (
    <>
      <Header />
      <div className="flex justify-between p-5 pb-0">
        <div className="text-4xl text-secondary " > Portfolio Admin</div>
        <button className="flex border border-black px-5 items-center bg-[#eb9d9d] rounded-full font-semibold"
        onClick={()=>{
          localStorage.removeItem("token")
          window.location.href="/admin-login"
        }}>
        Log Out
        </button>
      </div>
      {portfolioData && (
        <div className="mt-0 p-5 ">
          <Tabs
            className="text-xl "
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
}

export default AdminIndex;
