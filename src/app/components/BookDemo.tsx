import React, { FC } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button, Space, Input, Form } from 'antd';
import { useRouter } from "next/navigation";

interface Props {
    data: any
}
const BookDemo: FC<Props> = ({ data }) => {
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        localStorage.setItem('email', values.email);
        router.push(`/book-a-demo`)
    }
  return (
    <div className="search-bar book-demo">
        <Form onFinish={handleSendEmail}>
            <Space.Compact style={{ width: '100%' }}>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                    <Input name="email" type='Email' placeholder="Your Company email address" />
                </Form.Item>
                <Button htmlType="submit" type="primary" className="btn-main">Book a Demo</Button>
            </Space.Compact>
        </Form>
    </div>
  )
}

export default BookDemo