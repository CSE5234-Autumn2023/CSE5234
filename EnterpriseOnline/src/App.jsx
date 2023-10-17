import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from "./components/purchase";
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import Footer from './components/footer';
import Header from './components/header';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Home from './components/home';
import mock_products from "./data/mockProducts.json";
import axios from 'axios';

function App() {

  const [order, setOrder] = useState({
    cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
    address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
  });

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const local_order = JSON.parse(localStorage.getItem('order'));
    if (local_order) {
      setOrder(local_order);
    }

    axios
      .get('/inventory-management/inventory')
      .then((response) => {
          const data = response.data;
          setProducts(data);
    });
  }, []);


  return (
    <div className="App">
      <Router>
        <div className="content">
          <Header order={order}/>
          <Routes>
            <Route path="/purchase" element={<Purchase order={order} setOrder={setOrder} products={products} />} />
            <Route path="/" element={<Home />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry order={order} setOrder={setOrder} products={products} />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry order={order} setOrder={setOrder} products={products} />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder order={order} setOrder={setOrder} products={products} />} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation order={order} setOrder={setOrder} products={products} />} />
            <Route path="/aboutUs" element={<AboutUs order={order} setOrder={setOrder} products={products} />} />
            <Route path="/contactUs" element={<ContactUs order={order} setOrder={setOrder} products={products} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
