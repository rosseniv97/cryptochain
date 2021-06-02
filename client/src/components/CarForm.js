import moment from "moment";
import React from "react";
import { Form, Input, DatePicker, Space, Button, Select } from "antd";

import "../../style/index.css";
import "antd/dist/antd.css";

/* eslint-enable no-template-curly-in-string */

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
};

const disabledDateTime = () => {
  return {
    //disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
};

const CarForm = (props) => {
  
  const { status, fuelLevel, name, number, src } = props.location.state;

  return (
    <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
      <Form.Item name={["user", "id"]} label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item label="Take or Return">
        <Select onChange={(values) => console.log(values)}>
          <Select.Option value="1">Take</Select.Option>
          <Select.Option value="2">Return</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["car", "number"]}
        label="Car Number"
        rules={[{ min: 8, max: 8 }]}
      >
        <Input style={{ width: "50%" }} defaultValue={number} />
      </Form.Item>
      <Form.Item name={["date"]} label="Date of return">
        <Space direction="vertical" size={12}>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
        </Space>
      </Form.Item>
      <Form.Item name={["user", "information"]} label="Other Information: ">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CarForm;
