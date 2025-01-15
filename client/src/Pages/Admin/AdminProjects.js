import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

import { Button, Form, Modal } from "antd";
import "antd/dist/reset.css";

function AdminProjects() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  console.log("1-----obtained data", portfolioData);

  const [showModal, setShowModal] = useState(false);
  const [selectItemForEdit, setSelectItemForEdit] = useState({});

  const onFinish = async (values) => {
    try {
      //Load before update
      console.log("Update / ADD is clicked");
      console.log("Form  ", Form);
      dispatch(ShowLoading());

      console.log("2--- values sent:---", values);

      let response;
      if (selectItemForEdit) {
        console.log("Update clicked");
        console.log("3----updation object", selectItemForEdit);
        console.log("sending update request");
        response = await axios.post(
          "https://my-portfolio-anantarajkati.onrender.com/api/portfolio/update-course",

          { ...values, _id: selectItemForEdit._id }
        );
      } else {
        response = await axios.post(
          "https://my-portfolio-anantarajkati.onrender.com/api/portfolio/add-project",

          values
        );
      }
      //update opearation

      // hide Load after update
      dispatch(HideLoading());

      //Show result of update
      if (response.data.success) {
        console.log("success");

        console.log("4----response data:--", response.data);
        dispatch(HideLoading());
        console.log("reload");
        // to relaod page
        dispatch(ReloadData(true));
        // alert(response.data.message);
      } else {
        console.log("error");
        alert(response.data.message);
      }

      // to make state empty after update/add operation
      //   console.log("making state Null")
      //   setSelectItemForEdit(null);

      if (selectItemForEdit) {
        console.log("state is not null ");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    //to close modal on click of update
    setShowModal(false);
  };

  const handleDelete = async (Project_id) => {
    try {
      console.log(Project_id);
      dispatch(ShowLoading());

      const response = await axios.delete(
        `https://my-portfolio-anantarajkati.onrender.com/api/portfolio/delete-project/${Project_id}`
      );

      dispatch(HideLoading()); // Hide loader after the request

      if (response.data.success) {
        console.log("Project deleted successfully");
        alert(response.data.message);
        dispatch(ReloadData(true)); // Trigger a data reload
      } else {
        console.error("Failed to delete project");
        alert(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project.");
    }
  };

  console.log("displaying state", selectItemForEdit);

  return (
    <div>
      <div className="flex justify-between">
        <div>Admin Projects</div>
        <button
          className="border border-2 border-spacing-2 p-1 shadow bg-green-300 font-semibold"
          onClick={() => {
            setShowModal(true);
            setSelectItemForEdit(null);
            form.resetFields();
            console.log("add clicked");
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="cardContainer grid grid-cols-3 tablet:grid-cols-1 tablet:px-5 gap-10  mt-10">
        {portfolioData.projectRes.map((Project) => (
          <div className="card shadow border py-5 ">
            <h1 className="bg-secondary px-5 py-3  font font-semibold">
              {" "}
              {Project.projectName}
            </h1>
            <h1 className="px-5 py-2 font-semibold">{Project.link}</h1>
            <h1 className="px-5 py-2 ">{Project.description}</h1>
            <div className="button flex justify-end gap-5 p-3">
              <button
                className="shadow bg-gray-300 p-1 rounded font-semibold w-20 border border-2 border-black text-xl"
                onClick={() => {
                  setShowModal(true);
                  setSelectItemForEdit(Project);
                  form.setFieldsValue(Project);
                  console.log("on click of edit state set", selectItemForEdit);
                }}
              >
                Edit
              </button>
              <button
                className="shadow bg-red-400 p-1 rounded font-semibold w-20 border border-2 border-black"
                onClick={() => handleDelete(Project._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showModal}
        onCancel={() => {
          setSelectItemForEdit(null);
          setShowModal(false);
        }}
        title={selectItemForEdit ? "Edit Project" : " Add Project"}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="projectName" label="Project Name">
            <input type="text" placeholder="Project Name" />
          </Form.Item>
          <Form.Item name="link" label="Project Link">
            <input type="text" placeholder="url" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input type="text" placeholder="description" />
          </Form.Item>
          <div className="Buttons flex justify-end p-3 gap-10">
            <button
              className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
              type="button"
              onClick={() => {
                setSelectItemForEdit(null);
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800"
            >
              {selectItemForEdit ? "Update" : " Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminProjects;
