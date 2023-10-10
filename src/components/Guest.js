import React, { useContext, useEffect, useState } from 'react'
import { Input, Form, Layout, Modal, Table, Pagination } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { Typography, Col, Row, Button } from 'antd';
import { CaretRightOutlined, SaveFilled, DownloadOutlined, CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import { Context } from '../App';



export default function Guest() {
    const {open, setOpen} = useContext(Context);
    const { userData, setUserData } = useContext(Context)


    return (
        <>
            <Layout style={{ padding: '20px', backgroundColor: '#fff' }}>
                <Header style={{ backgroundColor: '#fff', padding: '0', height: 'auto', marginBottom: '20px' }}>
                    <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={18}><Title level={2} style={{ margin: '0px' }}>Guest</Title></Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>
                        <Typography.Paragraph>
                            By default your guests must be invited, and validated based on the emails in this guestlist. However you can change this in Store admin.
                        </Typography.Paragraph>
                    </Row>
                </Header>

                <Content style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '30px' }}>
                    <Title level={4}>Guest list</Title>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title level={5}>Search</Title>
                        <Row style={{ display: 'flex', flexDirection: 'row' }}>
                            <Col span={12}>
                                <Search style={{ width: 200 }} />
                            </Col>
                            <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
                                <Title level={5} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><DownloadOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Download CSV template</Title>
                                <Title level={5} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><CloudUploadOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Upload as CSV</Title>
                                <Title level={5} onClick={() => setOpen(true)} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><PlusOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Add a guest</Title>
                            </Col>
                        </Row>

                        {/* <Table columns={columns} dataSource={addUser} size="small" pagination={false} style={{ margin: '20px 0' }} /> */}

                        <table style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <td>firstName </td>
                                    <td>lastName </td>
                                    <td>company </td>
                                    <td>email </td>
                                    <td>giftClaimed </td>

                                </tr>
                                <hr style={{ width: '925%' }} />
                            </thead>
                            <tbody>

                                {userData.map((items) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{items.firstName}</td>

                                                <td>{items.lastName}</td>
                                                <td>{items.company}</td>
                                                <td>{items.email}</td>
                                                <td>{items.giftClaimed}</td>
                                            </tr>
                                            <hr style={{ width: '925%' }} />
                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Title level={5} style={{ color: '#595e6a' }}>Showing 1 to 10 of 97 results</Title>
                            <Pagination defaultCurrent={1} total={50} />
                        </Row>
                    </div>
                </Content>
            </Layout>

            <Popup open={open} setOpen={setOpen} />
        </>
    )
}

export function Popup({ open, setOpen}) {
    const data = { firstName: '', lastName: '', company: '', email: '', giftClaimed: 'No' }
    const [user, setUser] = useState(data);

    const [id, setId] = useState(11);

    const setGuestData = () => {
        axios.post("http://localhost:3000/Users", user)
            .then((responce) => {
                console.log(responce);
            })

    }



    const handleOk = () => {
        setGuestData();
        setUser({
            firstName: '', lastName: '', company: '', email: '', giftClaimed: 'No'
        });
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal title="Add new guest" open={open} onOk={handleOk} onCancel={handleCancel} okText='Submit' width={700}>
            <Typography.Paragraph level={5}>Create a new guest entry here. You must provide an email address to validate their account.</Typography.Paragraph>
            <Form>
                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <Col span={11}>
                        <Title level={5}>First Name</Title>
                        <Input type='text' value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
                    </Col>
                    <Col span={11}>
                        <Title level={5}>Last Name</Title>
                        <Input type='text' value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
                    </Col>
                </Row>
                <Col span={24} style={{ marginBottom: '15px' }}>
                    <Title level={5}>Company</Title>
                    <Input type='text' value={user.company} onChange={e => setUser({ ...user, company: e.target.value })} />
                </Col>
                <Col span={24} style={{ marginBottom: '25px' }}>
                    <Title level={5}>Email Address</Title>
                    <Input type='email' value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                </Col>
            </Form>
        </Modal>
    )
}