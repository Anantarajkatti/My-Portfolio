import { Form } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";


function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  console.log("initial render:---",portfolioData.aboutRes)

  const onFinish = async (values) => {
    try {
      console.log("save clicked")
      //Load before update
      dispatch(ShowLoading());


      console.log(" values received:---",values)
      if(portfolioData.aboutRes.skills[0]!== values.skills[0]){
       console.log( portfolioData.aboutRes.skills[0],values.skills[0])
        values.skills= values.skills.split(',')
      }
       console.log("skills in array",values.skills)

       console.log("Updated values to send:--", values)



      //update opearation
      const response = await axios.post("http://localhost:5000/api/portfolio/update-about", {
        ...values,
        _id : portfolioData.aboutRes._id
      });


       console.log("request Id",portfolioData.aboutRes._id)


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
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.aboutRes}
      >
        <Form.Item name="lottieLink" label="Lottie Link">
          <input placeholder="Lottie Link" />
        </Form.Item>
        <Form.Item name="descriptionOne" label="Description 1">
          <input placeholder="Description" />
        </Form.Item>
        <Form.Item name="descriptionTwo" label="Description 2">
          <input placeholder="Description" />
        </Form.Item>

        <Form.Item name="skills">
          <input style={{ height: "100px" }}  />
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

export default AdminAbout;
