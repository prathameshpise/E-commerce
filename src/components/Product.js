import React, { useEffect, useState } from "react";
import axios from 'axios';
import Title from "antd/es/typography/Title";
import { Button, Card, Col, Layout, Row, Select, Typography } from "antd";
import { CaretRightOutlined, BarsOutlined, SaveFilled } from '@ant-design/icons';
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";


// import "./ProductStyles.css";
// import CopperBottel from "../asset/CopperBottle.png";
// import Shirt from "../asset/Shirt.png";
// import Earbuds from "../asset/Earbuds.png";
// import PowerBank from "../asset/PowerBank.jpg";
const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => setProduct(res.data))
    }, [])
    // console.log(product);
    
    return (
       
        <>
            
                <div style={{ width:"100%"}}>
                <Header style={{ backgroundColor: '#fff', padding: '0', height: 'auto', marginBottom: '20px' }}>
                    <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={18}><Title level={2} style={{ margin: '0px' }}>Products</Title></Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>
                       
                    </Row>
                </Header>
                    <Col span={18} >
                        <p style={{ textAlign: "left", fontSize: "15px" }} id="txt">
                            Here you van choose the product selection for your store.We have
                            automatically chosen a selection for you based on the information you
                            give us,but you may add or remove items from this list.Just make sure
                            that the expected number of visitors will be plenty higher than the
                            minimun order quantities for all products on your site.
                        </p>
                    </Col>
                    <div style={{ margin: "0px", marginLeft: "935px" }}>
                        <Title level={5} >Search</Title>
                    </div>

                    <div id="slt2" style={{ textAlign: "start", margin: "0px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div >
                                <button
                                    id="slt"
                                    style={{
                                        backgroundColor: "#fc3903",
                                        border: "none",
                                        borderRadius: "20px",
                                        fontSize: "large",
                                        padding: "10px",
                                        color: 'white'
                                    }}
                                >
                                    My selection(18)
                                </button>
                                <button
                                    style={{
                                        marginLeft: "10px",
                                        marginRight: "100px",
                                        border: "none",
                                        backgroundColor: "white",
                                        fontSize: "large"
                                    }}
                                    id="pro"
                                >
                                    All Product(387)
                                </button>
                            </div>

                            <div
                                style={{
                                    marginLeft: "10px",
                                    paddingLeft: "200px",
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                }}
                                id="srch"
                            >
                                <Search

                                    style={{
                                        width: 300,
                                    }} />
                                <button id="srch2" style={{ textAlign: "end" }} >
                                    Search
                                </button>
                            </div>

                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <Title level={5}>Category</Title>
                                    <Select
                                        placeholder="All" mode="multiple"
                                        style={{
                                            width: '270px', borderRadius: "5px",
                                            border: "#d9d9d9 solid 1px"
                                        }}

                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                                    <Title level={5} >Price min</Title>
                                    <input
                                        placeholder="$ Min" mode="numbers"
                                        style={{
                                            width: '100px', borderRadius: "5px",
                                            border: "#d9d9d9 solid 1px", textAlign: "center", height: "30px"
                                        }}

                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                                    <Title level={5}>Price max</Title>
                                    <input
                                        placeholder="$ Max" mode="numbers"
                                        style={{
                                            width: '100px', borderRadius: "5px",
                                            border: "#d9d9d9 solid 1px", textAlign: "center", height: "30px"
                                        }}

                                    />
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "end", justifyContent: "end" ,width:"525px"}}>
                                <Button type='primary' shape='round' icon={<BarsOutlined />} style={{ alignContent: "right", backgroundColor: "#f5f5f5", borderColor: "#fa541c", color: "#fa541c"}}><b>Sort products</b></Button>
                            </div>
                        </div>

                    </div>
                    <div  style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "35px" }}>
                        {
                            product.map((ele) => {
                                console.log(ele);
                                return (

                                    <div 
                                        id="card1"
                                        className="pricing"
                                        style={{

                                            width: "calc((100% / 3 ) - 76px)",
                                            padding: "30px",
                                            background: "white",
                                            borderRadius: "10px",
                                            border: "#d9d9d9 solid 1px",
                                            position: "relative"
                                        }}
                                    >
                                        <div
                                            className="card-container"
                                            style={{

                                                margin: "auto",

                                                gridTemplateColumns: "repeat(3, 1fr)",
                                                gridGap: "40px",
                                            }}
                                        >
                                            <div className="card">
                                                <img
                                                    style={{ width: "100%", height: "270px" }}
                                                    id="Bag"
                                                    src={ele.image}
                                                    alt="bgImg"
                                                ></img>
                                                <button
                                                    style={{
                                                        backgroundColor: "#f2d5bb",
                                                        border: "none",
                                                        textColor: "#fc3903",
                                                        position: "absolute", top: "290px", left: "105px"

                                                    }}
                                                >
                                                    Make it your own
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor: "#fadf87",
                                                        borderColor: "#fadd87",
                                                        marginTop: "30px",
                                                        width: "100%",
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    <i
                                                        style={{ color: "#f5b042" }}
                                                        class="fa-solid fa-triangle-exclamation"
                                                    ></i>
                                                    set customization
                                                </button>
                                                <h3 style={{ fontWeight: "bold" }}>{ele.name}</h3>
                                                <span style={{ display: "flex" }} id="Year">
                                                    {ele.model_number}
                                                </span>
                                                <br></br>
                                                <div style={{ paddingRight: "130px" }}>
                                                    <span style={{ color: "green" }}>•</span> In Stock
                                                </div>
                                                <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "black",
                                                            border: "none",
                                                            boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "white",
                                                            border: "1px solid grey",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "darkblue",
                                                            border: "none",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "brown",
                                                            border: "none",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "lightgreen",
                                                            border: "none",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "orange",
                                                            border: "none",
                                                        }}
                                                    />
                                                    <button
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "grey",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>

                                                <p style={{ textAlign: "left", width: "200px" }}>
                                                    {ele.description}

                                                </p>
                                                <table
                                                    id="Bg1"
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "flex-start",
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    <tbody>
                                                        <td>
                                                            <tr>
                                                                <td>Coded Price</td>
                                                                <td>
                                                                    <b>{ele.code_price}</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Net Price</td>
                                                                <td>
                                                                    <b>{ele.Net_price}</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>shipping</td>
                                                                <td>
                                                                    <b>{ele.Shipping}</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Minimum order qty</td>
                                                                <td>
                                                                    <b>{ele.Minimum_order_quantity}</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Inventory</td>
                                                                <td>
                                                                    <b>{ele.Inventory}</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Personalization</td>
                                                                <td>
                                                                    <b>{ele.Personalization}</b>
                                                                </td>
                                                            </tr>
                                                        </td>
                                                    </tbody>
                                                </table>
                                                <button
                                                    style={{
                                                        color: "#fc3903",
                                                        border: "none",
                                                        display: "flex",
                                                        justifyContent: "flex-start",
                                                    }}
                                                >
                                                    View details
                                                </button>
                                            </div>


                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>



                </div>
            
        </>
    );
};


export default Product;

