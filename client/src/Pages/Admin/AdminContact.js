import { Form } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async (values) => {
        try {
          console.log("save clicked")
          //Load before update
          dispatch(ShowLoading());
    
    
          console.log(" values sent:---",values)
    
    
    
    
          //update opearation
          const response = await axios.post("http://localhost:5000/api/portfolio/update-contact", {
            ...values,
            _id : portfolioData.contactRes._id
          });
    
    
           console.log("request Id",portfolioData.contactRes._id)
    
    
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
      initialValues={portfolioData.contactRes}
    >
      <Form.Item name="name" label="Name">
        <input placeholder="Name" />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <input placeholder="Ahe" />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <input placeholder="Gender" />
      </Form.Item>
      <Form.Item name="nationality" label="Nationality">
        <input placeholder="Nationality" />
      </Form.Item>
      <Form.Item name="email" label="Email">
      <input placeholder="Email" />
      </Form.Item>
      <Form.Item name="mobile" label="Mobile">
      <input placeholder="Mobile" />
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
  )
}

export default AdminContact