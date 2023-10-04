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

function App(props) {

  const [order, setOrder] = useState({
    products: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
    address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
  });

  useEffect(() => {

    let products_list = []

    props.mock_products.map((product) => (
      products_list.push({
      product_name: product.name,
      quantity: 0,
      price: product.price
      })
    ))

    setOrder({...order, products: products_list} )
  }, [props])

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/purchase" element={<Purchase order={order} setOrder={setOrder} />} />
            <Route path="/" element={<Navigate replace to="/purchase" />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry order={order} setOrder={setOrder} />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry order={order} setOrder={setOrder} />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder order={order} setOrder={setOrder} />} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation order={order} setOrder={setOrder} />} />
            <Route path="/aboutUs" element={<AboutUs order={order} setOrder={setOrder} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
