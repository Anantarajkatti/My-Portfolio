import { Form } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {};
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

        <Form.Item name="Skills">
          <input style={{ height: "100px" }} placeholder="Skills" />
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
