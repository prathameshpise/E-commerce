import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import Orders from './components/Orders';
import Billing from './components/Billing';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Guest from './components/Guest';
import { Footer } from 'antd/es/layout/layout';
import Footers from './components/Footers';
import StoreAdmin from './components/StoreAdmin';
import Shipping from './components/Shipping';
import StoreOverview from './components/StoreOverview';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Design from './components/Design';

export const Context = createContext()

function App() {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState([])
  const [userData, setUserData] = useState([])
  console.log(userData);


  const getUsersData = () => {
    let URL = "http://localhost:3000/Users"
    axios.get(URL)
      .then((responce) => {
        setUserData(responce.data)
        // console.log(responce.data);
      })
  }

  useEffect(() => {
    getUsersData()
  }, [open])


  // const getProduct = async () => {
  //   let URL = "http://localhost:3000/users"
  //   const data = await axios.get(URL)


  //   setProduct(data.data)


  // }

  // const setGuestData = () => {
  //   const setDataURL = "http://localhost:3000/Users";
  //   // axios.post(JSON.stringify(setDataURL),);
  // }
  // useEffect(() => {

  //   getProduct()
  // }, [])
  return (
    <Context.Provider value={{ userData, setUserData, open, setOpen }}>
      <div className="App">
        {/* <Browserroute></Browserroute> */}
        {/* <Orders/> */}
        {/* <Billing/> */}
        {/* <Dashboard/> */}
        <div style={{ display: "flex", flexDirection: "row", }}>

          <div className="dashboard" style={{ height: "100vh", position: "fixed", }} >
            <Dashboard />
          </div>
          <div style={{ paddingLeft: "230px", width: '100%', marginRight: "30px" }}>
          
            <Routes>
              <Route path="/storeoverview" element={<StoreOverview />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/email" element={<Email />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/storeadmin" element={<StoreAdmin />} />
              <Route path="/product" element={<Product />} />
              <Route path="/Design" element={<Design />} />

            </Routes>

            <Footer style={{ marginTop: 'auto', backgroundColor: "#fff", padding: "20px", position: "relative", bottom: "0px" }}>
              <Footers />
            </Footer>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
