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
import mock_products from "./data/mock_products.json";

function App() {

  const [order, setOrder] = useState({
    products: mock_products, credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
    address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
  });


  useEffect(() => {
    const local_order = JSON.parse(localStorage.getItem('order'));
    if (local_order) {
      setOrder(local_order);
    }
  }, []);


  return (
    <div class="App">
      <Router>
        <div class="content">
          <Header />
          <Routes>
            <Route path="/purchase" element={<Purchase order={order} setOrder={setOrder} />} />
            <Route path="/" element={<Navigate replace to="/purchase" />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry order={order} setOrder={setOrder} />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry order={order} setOrder={setOrder} />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder order={order} setOrder={setOrder} />} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation order={order} setOrder={setOrder} />} />
            <Route path="/aboutUs" element={<AboutUs order={order} setOrder={setOrder} />} />
            <Route path="/contactUs" element={<ContactUs order={order} setOrder={setOrder} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
