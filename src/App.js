import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import ProductList from './ProductList';
import Order from './Order';
import Footer from './Footer';
import Info from './Info';

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
