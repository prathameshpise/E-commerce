import React, { useState } from 'react'
import { CaretRightOutlined, SaveFilled, DownloadOutlined } from '@ant-design/icons';
import { Typography, Col, Row, Button, Card, Input, Modal } from 'antd';
import Title from 'antd/es/typography/Title';
// import { Button, Modal } from 'antd';
import { Checkbox } from 'antd';
import Dashboard from './Dashboard';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {  Form, Layout, Pagination } from 'antd'


const Billing = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // const onChange = (e: CheckboxChangeEvent) => {
    //     console.log(`checked = ${e.target.checked}`);
    // };
    return (
        <>

            <div style={{  }}>
                <div className="header" style={{ paddingBottom: "50px" }}>
                    <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={18}><Title level={2} style={{ margin: '0px' }}>Billing</Title></Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>
                        {/* <Typography.Paragraph>
                                        Order palce through this store will appear here
                                    </Typography.Paragraph> */}
                    </Row>
                </div>
                <div className="card-item" style={{ display: "flex", justifyContent: "space-between " }}>
                    <Card style={{ width: "50%" }}>
                        <h2>Invoice preference</h2>
                        <span>Update invoice setting for the store. You will be invoiced weekly.</span>
                        <h4>Billing email</h4>
                        <Input placeholder='jeff.owens@xyz.com' />
                        <span>
                            This email will be used for billing purposes. Invoices and receipts will be sent to this email address.
                        </span>
                        <h4>
                            Company billing profile
                        </h4>
                        <Input placeholder='     ...' />
                        <span>
                            Additional company information to be shown on invoices e.g. address, PO number,etc.
                        </span>

                    </Card>
                    <Card>
                        <h2>Payment details</h2>
                        <span>Payment will be taken monthly using the details below.</span>
                        <Card style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button type="primary" onClick={showModal}>Add payment details +</Button>
                            <Modal title="Basic Modal" open={isModalOpen} okText='Submit' onOk={handleOk} onCancel={handleCancel}>
                                <h2>Billing details</h2>
                                <span>Please input your billing details below. Payment will be taken monthly.</span>
                                <p>Cardholder's name</p>
                                <Input />
                                <p>Card number</p>
                                <Input />
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p>Expiry date</p>
                                        <Input />
                                    </div>
                                    <div>
                                        <p>CVV code</p>
                                        <Input />
                                    </div>
                                </div>
                                <Checkbox onChange="">Save card for future use</Checkbox>
                                <Checkbox onChange=""> I agree to the <span >Terms & conditions.</span></Checkbox>

                            </Modal>
                        </Card>
                    </Card>

                </div>

            </div>


        </>
    )
}

export default Billing