import moment from "moment";
import React, { useEffect } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import axios from "axios";

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
  const onStatusChange = (formData) => {
    const data = {
      action: status === 'taken' ? 'return' : status === 'available' ? 'take' : null,
      number: number,
      date: formData.date.format(),
      user: {
        information: formData.user.information,
        id: formData.user.id
      }
    }
    
    axios.post('http://localhost:3000/api/mine', {data: data}).then((response) => {
      console.log(response.data)
    })

  };
  const { status, fuelLevel, name, number, src } = props;
  const [form] = Form.useForm();
  
  return (
    <Form
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
      onFinish={onStatusChange}
    >
      <Form.Item name={["user", "id"]} label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item name={["date"]} label="Date of return" >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
      </Form.Item>
      <Form.Item name={["user", "information"]} label="Other Information: ">
        <Input.TextArea name="information"/>
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
