import React, { useEffect } from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

   


  const onFinish = async (values) => {
    try {
      console.log("save clicked")
      //Load before update
      dispatch(ShowLoading());


      console.log(" values sent:---",values)




      //update opearation
      const response = await axios.post("https://my-portfolio-anantarajkati.onrender.com/api/portfolio/update-intro", {
        ...values,
        _id : portfolioData.introRes._id
      });


       console.log("request Id",portfolioData.introRes._id)


      // hide Load after update
      dispatch(HideLoading());
 

      //Show result of update
      if (response.data.success) {
        console.log("success")
        
        console.log(response.data)
        alert(response.data.message);
      } else {
        console.log("error")
       alert(response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
   
  return (
    <div className="text-2xl">
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.introRes}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="welcome text" />
        </Form.Item>
        <Form.Item name="firstName" label="First name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <input
            style={{
              height: "100px",
              width: "100%",
              resize: "vertical",
              overflow: "auto",
            }}
            placeholder="Description"
          />
        </Form.Item>
        <div className="flex justify-end text-2xl">
          <button
            className="bg-secondary px-10 py-2 rounded font-semibold"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
