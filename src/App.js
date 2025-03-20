import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Order from './components/Order';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    return (
        <div>
            <Header />
            <Info />
            {/* Pass selectedItems and setSelectedItems to ProductList */}
            <ProductList selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            <Order selectedItems={selectedItems} />
            <Footer />
        </div>
    );
}

export default App;
