'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Form, Space, Button, Input, Radio } from 'antd';
import { useRouter } from "next/navigation";
// IMAGES
import TrackLocation from '../../../public/images/track-location.webp';
import OrderReceived from '../../../public/images/order-received.svg';
import OrderPicked from '../../../public/images/order-picked.svg';
import OrderTrans from '../../../public/images/order-trans.svg';
import OrderDel from '../../../public/images/order-del.svg';
import OrderReached from '../../../public/images/order-reached.svg';
import type { RadioChangeEvent } from 'antd';


export default function Home() {
    const router = useRouter();
    const handleSendEmail = (values: any) => {
        window.location.href = `https://track.shipdelight.com/track?awb=${values.id}`;
    };
    const trackOrderList = [
        {
            title: 'Order Approved',
            text: "Great news! Your order is confirmed and we're prepping it for shipment.",
            icon: <OrderReceived />
        },
        {
            title: 'Pending Pick Up',
            text: 'Your package is packed and waiting for the courier to pick it up.',
            icon: <OrderPicked />
        },
        {
            title: 'Order In-transit',
            text: 'Your order is on the move, heading straight to your delivery address.',
            icon: <OrderTrans />
        },
        {
            title: 'Out For Delivery',
            text: 'Your package is with the courier and will be in your hands today.',
            icon: <OrderDel />
        },
        {
            title: 'Delivered',
            text: 'Hooray! Your order has arrived at its destination. Enjoy!',
            icon: <OrderReached />
        }
    ];
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <main>
            <section className="gradient-section platform-banner tracking-banner">
                <div className="container">
                    <div className="tracking-card">
                        <Flex align="center">
                            <Flex vertical className="tracking-card--content">
                                <Flex vertical gap={10}>
                                    <h2 className="mb-0">Track your orders easily</h2>
                                    <p className="tracking-card-des">Track your order's journey from our warehouse to your doorstep with real-time updates.</p>
                                </Flex>
                                <Flex gap={16} vertical>
                                    {/* <Radio.Group onChange={onChange} value={value} className="custom-radio--btns">
                                        <Radio value={0}>AWB</Radio>
                                        <Radio value={2}>Order Number</Radio>
                                        <Radio value={1}>Mobile Number</Radio>
                                    </Radio.Group> */}
                                    <div className="search-bar book-demo track-order">
                                        <Form onFinish={handleSendEmail}>
                                            <Space.Compact style={{ width: '100%' }}>
                                                <Form.Item
                                                    name="id"
                                                    rules={[{ required: true, message: 'Please enter your email!' }]}
                                                >
                                                    <Input name="id" type='text' placeholder="Enter AWB tracking number" />
                                                </Form.Item>
                                                <Button htmlType="submit" type="primary" className="btn-main">Track</Button>
                                            </Space.Compact>
                                        </Form>
                                    </div>
                                </Flex>
                                <Flex vertical gap={10}>
                                    <h5>Can’t find your AWB number or Order Id?</h5>
                                    <p>We sent your AWB tracking number & order id via Email & SMS upon order confirmation while placing your order.</p>
                                </Flex>
                            </Flex>
                            <div className="tracking-card--image">
                                <Image src={TrackLocation} alt="Track Your Location" />
                            </div>
                        </Flex>
                    </div>
                </div>
            </section>
            <section className="common-section normal-section">
                <div className="container">
                    <Flex vertical className="order-racking-process">
                        <Flex gap={10} vertical>
                            <h2 className="mb-0">What’s your order status?</h2>
                            <p className="order-racking-process--para">We seamlessly integrate with popular e-commerce platforms like Shopify, WooCommerce, Magento, and more, ensuring a smooth transition for your business.</p>
                        </Flex>
                        <Flex gap={20}>
                            {trackOrderList.map((item, index)=>(
                                <Flex vertical gap={17} key={index} className="tracklist--item">
                                    {item.icon}
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="tracklist--item--text">{item.text}</p>
                                    </div>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </div>
            </section>
        </main>
    );
}
