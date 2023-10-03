import './App.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from "./components/purchase"
import PaymentEntry from './components/paymentEntry'
import ShippingEntry from './components/shippingEntry'
import ViewOrder from './components/viewOrder'
import ViewConfirmation from './components/viewConfirmation'
import Footer from './components/footer'
import Header from './components/header'

function App() {

  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
    address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
  });

  return (
    <div class="App">
      <Header />
        <Router>
          <div class="content">
            <Routes>
              <Route path="/purchase" element={<Purchase order={ order } setOrder={ setOrder } />} />
              <Route path="/" element={<Navigate replace to="/purchase" />} />
              <Route path="/purchase/paymentEntry" element={<PaymentEntry order={ order } setOrder={ setOrder } />} />
              <Route path="/purchase/shippingEntry" element={<ShippingEntry order={ order } setOrder={ setOrder } />} />
              <Route path="/purchase/viewOrder" element={<ViewOrder order={ order } setOrder={ setOrder } />} />
              <Route path="/purchase/viewConfirmation" element={<ViewConfirmation order={ order } setOrder={ setOrder } />} />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
