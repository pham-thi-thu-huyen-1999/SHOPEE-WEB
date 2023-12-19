import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};
export default function LoginForm() {
  return (
    <div className="bg-white p-3">
      <h4 className="mb-1 text-xl font-500">Đăng nhập</h4>
      <Form name="formLogin" style={{ maxWidth: 600 }}>
        <Form.Item<FieldType>
          name="email"
          style={{ marginBottom: 30 }}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email"
            style={{ height: 50, width: 300, fontSize: 16 }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            placeholder="password"
            type="password"
            style={{ height: 50, width: 300, fontSize: 16 }}
          />
        </Form.Item>
        <Button
          style={{
            background: "#ff4500d9",
            color: "#fff",
            width: "100%",
            height: 40,
            borderRadius: 3,
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
