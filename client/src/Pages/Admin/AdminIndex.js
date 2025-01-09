import React from "react";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { Tabs } from "antd";
import Header from "../../Components/Header.js";
import { useSelector } from "react-redux";

// import  { TabsProps } from 'antd';

function AdminIndex() {
  const { portfolioData } = useSelector((state) => state.root);

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
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5 ">
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
