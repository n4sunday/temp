import { Button, Form, Input, Space } from 'antd'
import useAuth from 'src/hooks/useAuth'

const Login = () => {
  const { onLogin } = useAuth()

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Form onFinish={onLogin}>
        <Space className="w-[250px]" direction="vertical">
          <Form.Item name="appId" rules={[{ required: true, message: 'Please input your id' }]}>
            <Input placeholder="ID" />
          </Form.Item>
          <Form.Item
            name="secretKey"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button className="w-full mt-5" type="primary" htmlType="submit">
            Login
          </Button>
        </Space>
      </Form>
    </div>
  )
}

export default Login
