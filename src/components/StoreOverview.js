import React, { useState } from 'react'
import { CaretRightOutlined, ArrowRightOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography, Modal, Space, Alert, Divider } from 'antd';
import Card from 'antd/es/card/Card';
// import Logo from '../images/Logo.png'
import { Input, Form, Layout, Table, Pagination } from 'antd'
import { Header } from 'antd/es/layout/layout';


const { Title } = Typography;
const StoreOverview = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handlePublish = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{}}>

            <Header style={{ backgroundColor: '#fff', padding: '0', height: 'auto', marginBottom: '20px' }}>
                <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                    <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                    <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                </Layout>
                <Row>
                    <Col span={18}><Title level={2} style={{ margin: '0px' }}>Store overview</Title></Col>
                    <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>

                        <Button type="primary" shape="round" size='large' icon={<CloudUploadOutlined style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }} onClick={showModal}>
                            Publish
                        </Button>

                        <Modal title="Publish your store" open={isModalOpen} onPublish={handlePublish} okText="Publish"
                            onCancel={handleCancel}>
                            <div >You do not have start or end dates set on your site, so this store will go live immediately.If you want to change this please go to the store Admin </div>

                            <div style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}>
                                <input type="checkbox" id='checkbox' name='checkbox' value={"termsAndConditions"} />
                                <label htmlFor="checkbox">Agree to <u>terms & conditions</u></label>
                            </div>
                        </Modal>

                    </Col>

                </Row>
            </Header>

            <Card style={{ marginTop: "50px" }}>
                <Title level={3} style={{ margin: "0px" }}>Tasks required before publishing</Title>

                <Space direction="vertical" style={{ width: "100%", marginTop: "10px" }}>
                    <Alert message="You are ready to publish this site" type='success' showIcon />
                </Space>

                <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>All admin tasks complete</Title>
            </Card>

            <Row gutter={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>

                <Col span={6} sm={12} xs={24} md={6}>
                    <Card style={{ height: "210px" }}>

                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "8px" }}>Store dates</Title>
                            <Title level={2} style={{ marginTop: "3px", margin: "0px" }}>Not set</Title>
                        </div>
                        <Title level={5} style={{ color: "red" }} >Go to store admin {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

                <Col span={6} sm={12} xs={24} md={6}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Total sales + shipping</Title>
                            <Title level={2} style={{ margin: "0px" }}>$0</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>Net sales at retail price, plus sgipping</Title>
                        </div>
                        <Title level={5} style={{ color: "red" }}>Go to orders {<ArrowRightOutlined />} </Title>
                    </Card>
                </Col>

                <Col span={6} sm={12} xs={24} md={6}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Total cost</Title>
                            <Title level={2} style={{ margin: "0px" }}>$0</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>including shipping, to date</Title>
                        </div>
                        <Title level={5} style={{ color: "red" }}>Go to billing {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

                <Col span={6} sm={12} xs={24} md={6}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Guest invited</Title>
                            <Title level={2} style={{ margin: "0px" }}>58</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>43 have ordered</Title>
                        </div>
                        <Title level={5} style={{ color: "red" }}>Go to guests {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

            </Row>

            <div style={{ marginTop: "600px" }}>
                <Divider orientation="left" plain style={{ borderColor: "#d9d9d9", border: "1px solid " }}></Divider>

            </div>


        </div>
    )
}

export default StoreOverview
