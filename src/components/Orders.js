import { Card } from 'antd'
import React, { useContext, useState } from 'react'
// import { Pagination } from 'antd';
import "./Orders.css"
import { Table, Divider } from 'antd';
import { Typography, Col, Row, Button } from 'antd';
import Title from 'antd/es/typography/Title';
import { CaretRightOutlined, SaveFilled, DownloadOutlined, DownOutlined } from '@ant-design/icons';
import Dashboard from './Dashboard';
// import Title from 'antd/es/typography/Title';
import { Input, Form, Layout, Modal, Pagination, } from 'antd'
import axios from 'axios';
import { Context } from '../App';

const columns = [
    {
        title: 'Item',
        dataIndex: 'item',
    },
    {
        title: 'Guest',
        dataIndex: 'name',
    },
    {
        title: 'Order',
        dataIndex: 'order',
    },
    {
        title: 'Data ordered',
        dataIndex: 'DataOordered',
    },
    {
        title: 'value',
        dataIndex: 'value',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    }, {
        title: 'Details',
        dataIndex: 'details',
    }
];
const datas = [
    {
        key: '1',
        item: "Mophie Powerstation Wireles...",
        name: 'Ruben Dorwart',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details"
    },
    {
        key: '2',
        item: "Mophie Powerstation Wireles...",
        name: 'Marilyn Vetrovs',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '3',
        item: "Mophie Powerstation Wireles...",
        name: 'Ann Westervelt',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '4',
        item: "Mophie Powerstation Wireles...",
        name: 'Ryan George',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '5',
        item: "Mophie Powerstation Wireles...",
        name: 'Corey Ekstrom Bothman',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '6',
        item: "Mophie Powerstation Wireles...",
        name: 'CarterLevin',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '7',
        item: "Mophie Powerstation Wireles...",
        name: 'Davis Vaccaro',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '8',
        item: "Mophie Powerstation Wireles...",
        name: 'Cristopher Calzoni',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '9',
        item: "Mophie Powerstation Wireles...",
        name: 'Alena Bergson',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },
    {
        key: '10',
        item: "Mophie Powerstation Wireles...",
        name: 'Rayna Philips',
        order: 12937,
        DataOordered: "14/05 12:53:00",
        value: "$24.50",
        status: "pending",
        details: "Details",
    },


];

const Orders = () => {
    const { userData } = useContext(Context)
    console.log(userData);
    const data = { firstaName: "", lastName: "" }
    const [inputData, setInputData] = useState(data)
    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/Users", inputData)
            .then((responce) => {
                console.log(responce);
            })

    }
    return (
        <div >
            <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
            </Layout>
            <Row>
                <Col span={18}><Title level={2} style={{ margin: '0px' }}>Orders</Title></Col>
                <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                    <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                        Save Changes
                    </Button>
                </Col>
                <Typography.Paragraph>
                    Order palce through this store will appear here
                </Typography.Paragraph>
            </Row>
            <div className="card-container" style={{ display: 'flex', justifyContent: "space-evenly", gap: "24px" }}>
                <Card style={{ width: 350 }}>
                    <p> Total spend </p>
                    <h1>$368.84</h1>
                    <span>$8.85 per order average, including shipping</span>

                </Card>
                <Card style={{ width: 350 }}>
                    <p> Order received </p>
                    <h1>97</h1>


                </Card>
                <Card style={{ width: 350 }}>
                    <p> Shipped orders </p>
                    <h1>95</h1>
                    <span>2 Pending</span>

                </Card>
            </div>
            <div className="data-table">


                <Card>
                    <h2>All orders</h2>
                    <div className='download' style={{ color: "#ea580c", fontSize: "15px", }}><DownloadOutlined /> Download as CSV</div>

                    {/* <Table columns={columns} dataSource={data} size="small" pagination={false} /> */}
                    <div >
                        <table style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <td>item <DownOutlined style={{ fontSize: "11px" }} /></td>
                                    <td>Guest </td>
                                    <td>Order </td>
                                    <td>Data ordered </td>
                                    <td>Value </td>
                                    <td>Status </td>
                                    <td>  </td>
                                </tr>
                                <hr style={{ width: '1225%' }} />
                            </thead>
                            <tbody>

                                {userData.map((items) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{items.firstName}</td>

                                                <td>{items.firstName+" "+items.lastName}</td>
                                                <td>{items.company}</td>
                                                <td>{items.email}</td>
                                                <td>{items.giftClaimed}</td>
                                                <td style={{ color: "#ea580c" }}>pending{items.details}</td>
                                                <td style={{ color: "#ea580c" }}>details{items.details}</td>

                                            </tr>
                                            <hr style={{ width: '1225%' }} />
                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="table-bottom">

                        <p>Showing 1 to 10 of 97 results</p>
                        <Pagination defaultCurrent={1} total={50} />

                    </div>
                </Card>

            </div>
            <label>First Name</label>
            <input type='text' name='firstaName' value={inputData.firstaName} onChange={handleData}></input>
            <label>last Name</label>
            <input type='text' name="lastName" value={inputData.lastName} onChange={handleData}></input>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Orders







{/* <table >
                    <thead>
                        <tr>
                            <td>item </td>
                            <td>Guest </td>
                            <td>Order </td>
                            <td>Data ordered </td>
                            <td>Value </td>
                            <td>Status </td>
                            <td>  </td>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.item}</td>

                                        <td>{item.name}</td>
                                        <td>{item.order}</td>
                                        <td>{item.DataOordered}</td>
                                        <td>{item.value}</td>
                                        <td>{item.status}</td>
                                        <td style={{ color: "#ea580c" }}>{item.details}</td>

                                    </tr>
                                    <hr style={{ width: '325%' }} />
                                </>
                            )
                        })}

                    </tbody>
                </table> */}