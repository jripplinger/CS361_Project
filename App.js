import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import CheckedOut from './components/CheckedOut.js';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/Cart/CheckedOut" element={<CheckedOut />}/>
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
