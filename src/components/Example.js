// import React from 'react'
// import './App.css'
// import { Layout } from 'antd'
// import { Content, Footer, Header } from 'antd/es/layout/layout'
// import { Typography, Col, Row, Button } from 'antd';
// import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
// import Search from 'antd/es/input/Search';
// import Title from 'antd/es/typography/Title';

// export default function App() {
//   return (
//     <Layout style={{ padding: '20px', backgroundColor: '#fff' }}>
//       <Header style={{ backgroundColor: '#fff', padding: '0', height: 'auto' }}>
//         <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//           <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
//           <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
//           <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
//         </Layout>
//         <Row>
//           <Col span={18}><Title level={2} style={{ margin: '0px' }}>Guest</Title></Col>
//           <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
//             <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
//               Save Changes
//             </Button>
//           </Col>
//           <Typography.Paragraph>
//             By default your guests must be invited, and validated based on the emails in this guestlist. However you can change this in Store admin.
//           </Typography.Paragraph>
//         </Row>
//       </Header>